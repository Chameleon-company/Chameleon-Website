const authService = require('../services/authService');
const { getFirestore, setDoc, getDoc, getDocs, doc, query } = require('firebase/firestore');

exports.userSignUp = async (req, res) => {
  const { email, password, fname, lname, role, project, phone, github } = req.body;
  if (!isStrongPassword(password)) {
    return res.status(400).json({ 
      error: 'Password does not meet security requirements',
      requirements: {
        minLength: 8,            // Minimum password length
        uppercase: true,         // Requires uppercase letters
        lowercase: true,         // Requires lowercase letters
        digit: true,             // Requires at least one digit
        specialCharacter: true,  // Requires at least one special character (!@#$%^&*)
      }
    });
  }
  try {
    const user = await authService.createUser(email, password, fname, lname, role, project, phone, github);
    res.status(201).json({ message: 'User signed up successfully', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("hi");
  }
};

exports.userSignIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await authService.signInUser(email, password);
    
    if (!user.emailVerified) {
      return res.status(401).json({ error: 'Email is not verified. Please verify your email address.' });
    }
    
    try {
      const userRole = await authService.getUserRole(email, password);
      getDoc(userRole)
      .then((docSnap) => {
          if(docSnap.exists()) {
              const userData = docSnap.data();
              return res.status(200).json({ message: 'User signed in successfully', user,  userData});
          }
      })
    }
    catch (error) {
      res.status(500).json({ error: 'Can\'t retrieve the user role', error });
      console.log(error);
    }
  
  } catch (error) {
    res.status(401).json({ error: 'Authentication failed' });
  }
};

exports.getUserCollection = async (req, res) => {
  try {
    const { document } = req.body;
    // getting the user collection
    const userCollection = await authService.getCollection();

    // getting the query snapshot of the collection
    // const querySnapshot = await getDocs(query(userCollection, orderBy('firstName'))); // orderby not working <-- fix
    const querySnapshot = await getDocs(userCollection);

    // extracting documents from the query snapshot
    var docs = querySnapshot.docs.map(doc => doc.data());

    // console.log(docs);

    return res.status(200).json({ message: 'Data retrieved successfully', docs});
  } catch (error) {
    res.status(401).json({ error: 'Authentication failed' });
  }
}

exports.promoteUser = async (req, res) => {
  try {
    const { uid, role } = req.body;

    const userRole = await authService.setUserRole(uid, role);
  }
  catch (error) {
    res.status(401).json({ error: 'Authentication failed' });
  }
}

// Function to check if the password meets security requirements
function isStrongPassword(password) {
  // Define password security requirements
  const minLength = 8;  // Minimum password length
  const hasUppercase = /[A-Z]/.test(password);  // Contains uppercase letters
  const hasLowercase = /[a-z]/.test(password);  // Contains lowercase letters
  const hasDigit = /\d/.test(password);  // Contains digits
  const hasSpecialChar = /[!@#$%^&*]/.test(password);  // Contains special characters

  // Check if the password meets the requirements
  if (
    password.length < minLength ||
    !hasUppercase ||
    !hasLowercase ||
    !hasDigit ||
    !hasSpecialChar
  ) {
    return false;
  }

  return true;
}

exports.sendVerificationEmail = async (req, res) => {
  const user = auth.currentUser;
  if (user) {
    await sendEmailVerification(user);
  }
};

exports.sendPasswordResetEmail = async (req, res) => {
  const { email } = req.body;
  try {
    await authService.sendPasswordResetEmail(email);
    res.status(200).json({ message: 'Password reset email sent' });
  } catch (error) {
    res.status(500).json({ error: error.message });
    // console.log("hi");
  }
};

exports.userSignOut = async (req, res) => {
  try {
    await authService.signOutUser();
    res.status(200).json({ message: 'User signed out successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
    // console.log("hi22");
  }
};

exports.LoginStatus = (req, res) => {
  const user = authService.getCurrentUser();
  if (user) {
    res.send(`Hello, ${user.displayName || 'User'}`);
  } else {
    res.send('Please sign in');
  }
};

exports.getUserID = (req,res) =>{
  const user = authService.getCurrentUser();
  res.send(user.uid);
}

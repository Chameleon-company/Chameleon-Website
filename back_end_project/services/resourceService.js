const { initializeApp } = require('firebase/app');
const firebaseConfig = require('../firebaseConfig');
const { getFirestore, doc, getDoc, setDoc, updateDoc, deleteDoc, collection, getDocs } = require('firebase/firestore');

// Initialize Firebase
initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore();
exports.getIotStats = async () => {
    try {
        // const resourceCollection = collection(db, "IotStats");
        // const snapshot = await getDocs(resourceCollection);
        // const resources = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const resources = {
            "content": "By 2028, the Australian IoT market is projected to have increased from US$15.46 billion to US$27.13 billion. The largest IoT market in Australia is the automotive industry, followed by the industrial and retail sectors. In Australia, there will be 16.7 million linked IoT devices by 2022. By 2028, Australia is projected to have 28.9 million linked IoT devices. IoT devices are connected to 10 ordinary Australian homes. Smart speakers, smart thermostats, and smart security cameras are the most widely used IoT devices in Australia. The adoption of Industry 4.0 technologies, the rise of the Internet of Vehicles (IAV), and the desire for smart city solutions are what are driving the IoT market in Australia."
        }
        return resources;
    } catch (error) {
        throw new Error('Error fetching Resource Data: ' + error.message);
    }
};
exports.getIotSecurity = async () => {
    try {
        // const resourceCollection = collection(db, "IotSecurity");
        // const snapshot = await getDocs(resourceCollection);
        // const resources = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const resources = {
            "content1": "The proliferation of IoT devices introduces a significant challenge: security. With billions of devices connected to the internet, the potential attack surface for malicious actors has expanded exponentially. Ensuring the security of these devices is paramount to protect sensitive data, maintain user privacy, and ensure the reliability of IoT systems.",
            "content2": "Data breaches involve unauthorized access to sensitive information collected by IoT devices. DDoS attacks can occur when compromised IoT devices are used to launch distributed denial-of-service attacks. Device hijacking refers to the unauthorized control of IoT devices, potentially leading to malicious activities. Network attacks exploit vulnerabilities in network protocols to intercept or alter data.",
            "content3": "Encryption is crucial, as it involves implementing robust encryption protocols to protect data in transit and at rest. Ensuring strong authentication mechanisms is essential to verify the identity of devices and users. Regular updates of firmware and software are necessary to patch vulnerabilities. Network segmentation helps by isolating IoT devices on separate networks to limit the spread of potential attacks. Educating users about best practices for securing IoT devices and networks is also important.",
            "content4": "In healthcare, securing IoT is vital for protecting patient data and ensuring the reliability of medical IoT devices. For smart homes, it involves securing home automation systems to prevent unauthorized access and control. In the context of industrial IoT, safeguarding critical infrastructure and industrial processes from cyber threats is of utmost importance.",
            "content5": "AI-powered security solutions are on the rise, using artificial intelligence to detect and respond to threats in real-time."
        }
        return resources;
    }
    catch (error) {
        throw new Error('Error fetching Resource Data: ' + error.message);
    }
};
exports.getIotTech = async () => {
    try {
        // const resourceCollection = collection(db, "IotTech");
        // const snapshot = await getDocs(resourceCollection);
        // const resources = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const resources = {
            "content1": "The Internet of Things (IoT) is a network of connected computing devices, mechanical and digital machinery, items, animals, or people that can exchange data across a network without the need for human-to-human or human-to-computer interaction. The Internet of Things (IoT) is a huge network of physical items that are equipped with sensors, software, and network connectivity in order to gather and share data. By using this information, procedures can be automated and judgements can be improved.",
            "content2": "Efficiency gain: By automating procedures and gathering data that can be utilised to optimise operations, IoT can assist firms in becoming more efficient. IoT-connected sensors, for instance, can be used to optimise HVAC systems and monitor energy usage, which can help businesses save their energy expenditures. Enhanced collaboration among employees and the ability to work remotely are two ways that IoT might help firms be more productive. IoT-connected devices, for instance, can be used to automatically order supplies and keep track of inventory levels, freeing up staff members to concentrate on other responsibilities. Better customer service: The Internet of Things (IoT) can aid businesses by giving real-time data on customer wants and preferences. IoT-connected gadgets, for instance, can track customer behaviour in stores and offer individualised recommendations. IoT help to improve safety by monitoring and regulating potentially dangerous conditions. For instance, IoT-connected sensors can be used to track air quality and immediately turn off equipment if levels go too high. New business prospects: The Internet of Things (IoT) is generating new business opportunities across a range of industries, including manufacturing, transportation, and healthcare. For instance, real- time patient health monitoring and individualised care are both possible with IoT-connected equipment.",
            "content3": "IoT devices can be connected to the internet in various ways, including Wi-Fi, Bluetooth, cellular networks, and satellite communication. IoT devices can also be connected to each other through various protocols, such as MQTT, CoAP, and HTTP. IoT devices can also be connected to the internet through gateways, which act as intermediaries between the device and the internet.",
        }
        return resources;
    }
    catch (error) {
        throw new Error('Error fetching Resource Data: ' + error.message);
    }
};

exports.getIotUpdates = async () => {
    try {
        // const resourceCollection = collection(db, "IotUpdates");
        // const snapshot = await getDocs(resourceCollection);
        // const resources = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const resources = {
            "content1": "The advancement of 6G wireless technology: 6G is the following generation of wireless technology and is anticipated to provide significantly higher speeds and lower latency than 5G. IoT applications will have more options as a result of the ability for devices to communicate data more quickly and dependably.",
            "content2": "Edge computing is becoming more popular because it moves storage and computation closer to the network's edge. In addition to making IoT applications more resilient to network failures, this can increase performance and decrease latency for such applications.",
            "content3": "Artificial intelligence (AI) is becoming more prevalent in the Internet of Things (IoT). AI is being utilised to power a variety of IoT applications, from smart home gadgets to industrial automation systems. IoT devices' efficiency, precision, and ability to make decisions can all be improved by AI. The IoT is increasingly using distributed ledger technology called blockchain, which may be used to track and record transactions between IoT devices. This could aid in enhancing the security and openness of IoT applications.",
            "content4": "The creation of new IoT standards: To solve the issues of scalability, interoperability, and security, new IoT standards are being created. These standards will aid in ensuring the security and dependability of IoT devices as well as their ability to connect with one another and other systems."
        }
        return resources;
    }
    catch (error) {
        throw new Error('Error fetching Resource Data: ' + error.message);
    }
};
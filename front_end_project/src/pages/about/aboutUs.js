import React, { Component } from "react";
import chameleonImg from "./assets/needToAdd.jpeg";
import achievmentIcon1 from "./assets/achievmentIcon1.png";
import achievmentIcon2 from "./assets/achievmentIcon2.png";
import achievmentIcon3 from "./assets/achievmentIcon3.png";
import achievmentIcon4 from "./assets/achievmentIcon4.png";
// Import Css Cause Some Classes Are Conflicting With Bootstrap
import styles from "./aboutUs.module.css";
import Screen from '../../components/app/Screen';

class aboutUs extends Component {
  render () {
    return (
      <Screen>
        {/* This class bg-[#deece3] is used to set the background color to the hex code #deece3. */}
        <div className=" bg-[#deece3] ">
          {/* About Us Section */}
          <div className={styles.aboutSection}>
            {/* These classes combination centers text, sets it to a semi-bold font weight, and adjusts the text size to 4xl on large screens (lg:text-4xl) and 3xl by default (text-3xl) */}
            <h3 className="text-center font-semibold lg:text-4xl text-3xl">
              About Us
            </h3>

            {/* These class combination sets the text size to 2xl on large screens (lg:text-2xl), 1xl by default (text-xl), tightens the line height (leading-tight), centers the text (text-center), removes margin (m-0), and adds top margin on medium screens (md:mt-3). */}
            <p
              className={`${styles.aboutP} lg:text-2xl text-xl leading-tight text-center m-0 md:mt-3 `}
            >
              Chameleon aims to utilise the Internet of Things (IoT), which is
              an ecosystem consisting of web-enabled smart devices such as
              phones, suburban traffic systems and domestic appliances, that all
              use embedded systems, such as processors, sensors, and
              communication hardware, to collect, send and act on data they
              acquire from their environments.
            </p>
          </div>

          {/* Mission Section */}
          <div className={styles.missionSection}>
            {/* These class combination centers the text (text-center), sets it to a semi-bold font weight (font-semibold), and adjusts the text size to 4xl on large screens (lg:text-4xl) and 3xl by default (text-3xl). */}
            <h3 className="text-center font-semibold lg:text-4xl text-3xl">
              Our Mission
            </h3>

            {/* These class combination creates a flexible and centered column layout with a maximum width of 6xl, adding specific gaps between elements on medium and default screens (md:gap-5 and gap-3), while distributing items evenly along the main axis and centering them along the cross-axis (justify-between and items-center). */}
            <div className="flex mx-auto flex-col  md:gap-5 gap-3 justify-between items-center max-w-6xl">
              {/*  These class combination sets the width of the element to 200px by default (w-[200px]), 250px on medium screens (md:w-[250px]), and 300px on large screens (lg:w-[300px]), while also adding a top margin of 3 units (mt-3). */}
              <img
                alt="chameleon-logo"
                src={chameleonImg}
                className="lg:w-[300px] md:w-[250px] mt-3 w-[200px] "
              />

              {/* These class combination sets the text size to extra-large on large screens (lg:text-xl), large by default (text-lg), centers the text (text-center), and removes margin (m-0). */}
              <p className="lg:text-xl text-lg m-0 text-center">
                Chameleon aims to utilise the Internet of Things (IoT), which is
                an ecosystem consisting of web-enabled smart devices such as
                phones, suburban traffic systems and domestic appliances, that
                all use embedded systems, such as processors, sensors, and
                communication hardware, to collect, send and act on data they
                acquire from their environments.
              </p>
            </div>
          </div>

          {/* Achievements Section */}
          <div className={styles.achievementsSection}>
            {/* These classes combination centers the text (text-center), sets it to a semi-bold font weight (font-semibold), and adjusts the text size to 4xl on large screens (lg:text-4xl) and 3xl by default (text-3xl). */}
            <h3 className="text-center font-semibold lg:text-4xl text-3xl">
              Achievements
            </h3>

            {/* These classes combination creates a flexible layout with column orientation by default, transitioning to a row layout on medium screens (md:flex-row). It specifies gaps between elements for both default and large screens (gap-3 and lg:gap-5), centers and justifies elements on both axes (justify-center and items-center), adds margin on medium and default screens (md:mt-4 and mt-4), allows flex wrapping on screens up to 1199px (max-[1199px]:flex-wrap), and sets a maximum width of 6xl with horizontal centering (max-w-6xl and mx-auto). */}
            <div className="flex gap-3 flex-col md:flex-row lg:gap-5 justify-center items-center md:mt-4 mt-4 max-[1199px]:flex-wrap max-w-6xl mx-auto ">
              {/* Achievements Box 1 */}

              {/* These classes combination utilizes Flexbox to create a container with horizontal alignment of items, achieved through the classes flex and items-center. The container is likely named achievementsBox. */}
              <div className="achievementsBox flex items-center">
                {/* These classes combination styles an element with a background color of #d9d9d9 (bg-[#d9d9d9]), adds padding of 2 units (p-2), rounds the corners to create a circular shape (rounded-full), sets the stacking order to 2 (z-2), adjusts the stacking order relative to its normal position (relative), places it slightly above the normal stacking level by 1px (z-[1px]), and adds a black border with a thickness of 1px (border-black and border-[1px]). The class likely applies to an element with the name boxIcon. */}
                <div className="boxIcon bg-[#d9d9d9] p-2 rounded-full z-2  relative z-[1px] border-black border-[1px] ">
                  {/* the class w-[40px] sets the width of the element to 40 pixels. */}
                  <img alt="achievement-icon-1" src={achievmentIcon1} className="w-[40px]" />
                </div>

                {/*  These classes combination styles a text element with the color black (text-black), adds vertical padding of 15 pixels (py-[15px]), sets the width to 300 pixels by default and 250 pixels on medium screens (w-[300px] and md:w-[250px]), centers the text (text-center), adds a black border with a thickness of 2 pixels (border-black and border-[2px]), moves the element to the left by 45 pixels (ml-[-45px]), removes the left border (border-l-0), gives it a rounded shape (rounded-full), and sets the stacking order to 1 (z-1). The class likely applies to an element with the name boxText. */}
                <div className="boxText text-black py-[15px] w-[300px] md:w-[250px] text-center border-black ml-[-45px] border-[2px] z-1 border-l-0 rounded-full">
                  {/* These class combination sets the margin to zero (m-0) and applies a bold font weight (font-bold). */}
                  <h5 className="m-0 font-bold">50,000</h5>
                </div>
              </div>

              {/* Achievements Box 2 */}

              {/* These classes combination utilizes Flexbox to create a container with horizontal alignment of items, achieved through the classes flex and items-center. The container is likely named achievementsBox. */}
              <div className="achievementsBox flex items-center">
                {/* These classes combination styles an element with a background color of #d9d9d9 (bg-[#d9d9d9]), adds padding of 2 units (p-2), rounds the corners to create a circular shape (rounded-full), sets the stacking order to 2 (z-2), adjusts the stacking order relative to its normal position (relative), places it slightly above the normal stacking level by 1px (z-[1px]), and adds a black border with a thickness of 1px (border-black and border-[1px]). The class likely applies to an element with the name boxIcon. */}
                <div className="boxIcon bg-[#d9d9d9] p-2 rounded-full z-2  relative z-[1px] border-black border-[1px] ">
                  {/* the class w-[40px] sets the width of the element to 40 pixels. */}
                  <img alt="achievement-icon-2" src={achievmentIcon2} className="w-[40px]" />
                </div>

                {/*  These classes combination styles a text element with the color black (text-black), adds vertical padding of 15 pixels (py-[15px]), sets the width to 300 pixels by default and 250 pixels on medium screens (w-[300px] and md:w-[250px]), centers the text (text-center), adds a black border with a thickness of 2 pixels (border-black and border-[2px]), moves the element to the left by 45 pixels (ml-[-45px]), removes the left border (border-l-0), gives it a rounded shape (rounded-full), and sets the stacking order to 1 (z-1). The class likely applies to an element with the name boxText. */}
                <div className="boxText text-black py-[15px] w-[300px] md:w-[250px] text-center border-black ml-[-45px] border-[2px] z-1 border-l-0 rounded-full">
                  {/* These class combination sets the margin to zero (m-0) and applies a bold font weight (font-bold). */}
                  <h5 className="m-0 font-bold">43,850 +</h5>
                </div>
              </div>

              {/* Achievements Box 3*/}

              {/* These classes combination utilizes Flexbox to create a container with horizontal alignment of items, achieved through the classes flex and items-center. The container is likely named achievementsBox. */}
              <div className="achievementsBox flex items-center">
                {/* These classes combination styles an element with a background color of #d9d9d9 (bg-[#d9d9d9]), adds padding of 2 units (p-2), rounds the corners to create a circular shape (rounded-full), sets the stacking order to 2 (z-2), adjusts the stacking order relative to its normal position (relative), places it slightly above the normal stacking level by 1px (z-[1px]), and adds a black border with a thickness of 1px (border-black and border-[1px]). The class likely applies to an element with the name boxIcon. */}
                <div className="boxIcon bg-[#d9d9d9] p-2 rounded-full z-2  relative z-[1px] border-black border-[1px] ">
                  {/* the class w-[40px] sets the width of the element to 40 pixels. */}
                  <img alt="achievement-icon-3" src={achievmentIcon3} className="w-[40px]" />
                </div>

                {/*  These classes combination styles a text element with the color black (text-black), adds vertical padding of 15 pixels (py-[15px]), sets the width to 300 pixels by default and 250 pixels on medium screens (w-[300px] and md:w-[250px]), centers the text (text-center), adds a black border with a thickness of 2 pixels (border-black and border-[2px]), moves the element to the left by 45 pixels (ml-[-45px]), removes the left border (border-l-0), gives it a rounded shape (rounded-full), and sets the stacking order to 1 (z-1). The class likely applies to an element with the name boxText. */}
                <div className="boxText text-black py-[15px] w-[300px] md:w-[250px] text-center border-black ml-[-45px] border-[2px] z-1 border-l-0 rounded-full">
                  {/* These class combination sets the margin to zero (m-0) and applies a bold font weight (font-bold). */}
                  <h5 className="m-0 font-bold">10,000 +</h5>
                </div>
              </div>

              {/* Achievements Box 4 */}

              {/* These classes combination utilizes Flexbox to create a container with horizontal alignment of items, achieved through the classes flex and items-center. The container is likely named achievementsBox. */}
              <div className="achievementsBox flex items-center">
                {/* These classes combination styles an element with a background color of #d9d9d9 (bg-[#d9d9d9]), adds padding of 2 units (p-2), rounds the corners to create a circular shape (rounded-full), sets the stacking order to 2 (z-2), adjusts the stacking order relative to its normal position (relative), places it slightly above the normal stacking level by 1px (z-[1px]), and adds a black border with a thickness of 1px (border-black and border-[1px]). The class likely applies to an element with the name boxIcon. */}
                <div className="boxIcon bg-[#d9d9d9] p-2 rounded-full z-2  relative z-[1px] border-black border-[1px] ">
                  {/* the class w-[40px] sets the width of the element to 40 pixels. */}
                  <img alt="achievement-icon-4" src={achievmentIcon4} className="w-[40px]" />
                </div>

                {/*  These classes combination styles a text element with the color black (text-black), adds vertical padding of 15 pixels (py-[15px]), sets the width to 300 pixels by default and 250 pixels on medium screens (w-[300px] and md:w-[250px]), centers the text (text-center), adds a black border with a thickness of 2 pixels (border-black and border-[2px]), moves the element to the left by 45 pixels (ml-[-45px]), removes the left border (border-l-0), gives it a rounded shape (rounded-full), and sets the stacking order to 1 (z-1). The class likely applies to an element with the name boxText. */}
                <div className="boxText text-black py-[15px] w-[300px] md:w-[250px] text-center border-black ml-[-45px] border-[2px] z-1 border-l-0 rounded-full">
                  {/* These class combination sets the margin to zero (m-0) and applies a bold font weight (font-bold). */}
                  <h5 className="m-0 font-bold">12</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Screen>
    );
  }
}

export default aboutUs;

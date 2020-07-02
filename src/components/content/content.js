import React from 'react';
import Ndguthrie from '../../assets/images/NDG-Profile-20190714.png'
import { ContentWrap } from './contentStyles';

function Content () {
  return (
    <ContentWrap>
      <h3>Some Heading</h3>
      <div className="boxWrap">
        <center>          
          <img  className="img" 
                src={Ndguthrie}
                style={{ width: "30vh",
                        paddingLeft: "5%",
                        paddingRight: "5%" }}>
          </img>
        </center>
          <div className="cont">
          <p>
            I am a Software Engineer open to new opportunities. 
            I am currently re-exploring Python after dabbling in it several 
            years ago in classes. I'm also dabbling with some Raspberry Pi 
            and other embedded projects using the Qt5 framework. 
            My background consists primarily of C++ as well as Ruby, Rails, 
            Visual Basic, Python, .NET, and others.
          </p>
          <p>
            I also work on side projects such as the Distralite, a
            collaborative effort with Dr. Hall and local law enforcement
            to build a "less lethal" distraction device.
          </p>
          <p>
            In July 2018, I began Flight Training to work towards my
            Private Pilot's license, and the experience has been quite
            enjoyable.
          </p>
          <p>M.S. Mechanical Engineering, Purdue University, 2013</p>
        </div>
      </div>
    </ContentWrap>
  )
}

export default Content;
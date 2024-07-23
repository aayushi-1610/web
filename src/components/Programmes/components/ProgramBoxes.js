import React from 'react'
import { useInView } from 'react-intersection-observer';
// import LazyLoadImage from './LazyLoadImage';

export default function ProgramBoxes(props) {
  // const [imageRef, imageInView] = useInView({ triggerOnce: true });
  // const [headingRef, headingInView] = useInView({ triggerOnce: true });
  // const [overviewRef, overviewInView] = useInView({ triggerOnce: true });
  // const [program1Ref, program1InView] = useInView({ triggerOnce: true });
  // const [program2Ref, program2InView] = useInView({ triggerOnce: true });
  // const [program3Ref, program3InView] = useInView({ triggerOnce: true });
  // const [program4Ref, program4InView] = useInView({ triggerOnce: true });
  // const [program5Ref, program5InView] = useInView({ triggerOnce: true });
  // const [program6Ref, program6InView] = useInView({ triggerOnce: true });
  // const [program7Ref, program7InView] = useInView({ triggerOnce: true });
  return (
    <div>
      <div className="programname">{props.program_title} </div>
      <div className="programinfo">

      {/* <LazyLoadImage id={props.id} src={`./images/${props.id}.jpg`} /> */}
            <div className="program-related-image" id={props.id}></div>
        <div className="program-related-para">{props.program_info}
        <br/>
        <div className="donate">
        {/* <button className='donatebtn'> */}
          <a className="donatebtn" href={props.joinlink}>Join Now</a>
          {/* </button> */}
      </div>
        </div>
      </div>
    
    </div>
  )
}

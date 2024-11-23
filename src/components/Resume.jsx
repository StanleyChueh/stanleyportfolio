import React from "react";

const Resume = () => {
    return (
        <div id="resume" style={{ padding: "20px" }}>
            <h2>Resume</h2>
            <div>
                <h3>Education</h3>
                <p>Bachelor in Electrical Engineering(Overall GPA:3.68/4.0)</p>
                {/* Include the rest of your resume content */}
            </div>
            <div>
                <h3>City Sience Lab@Taipei Tech</h3>
                <p>Undergraduate Research Oportunity Program(UROP) at City Science Lab</p>
                <h3>InstAI Inc.</h3>
                <p>Assistant Engineeer in InstAI Inc. for Generative AI works</p>
            </div>

        </div>
    );
};

export default Resume;

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <h2>Assignment Name</h2>

  
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />

      <label htmlFor="wd-description">Description</label>
      <br />
      <textarea
        id="wd-description"
        rows={8}
        cols={60}
        defaultValue={`The assignment is available online. Submit a link to the landing page of
your Web application running on Vercel. The landing page should include
your full name and section, links to each of the lab exercises, a link
to the Kambaz application, and links to the source code repositories.
The Kambaz application should include a link back to the landing page.`}
      />
      <br />
      <br />

      <table>
        <tbody>
       
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" type="number" defaultValue={100} />
            </td>
          </tr>

      
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </select>
            </td>
          </tr>

        
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" defaultValue="Percentage">
                <option value="Percentage">Percentage</option>
                <option value="Points">Points</option>
                <option value="Letter">Letter Grade</option>
                <option value="GPA">GPA</option>
              </select>
            </td>
          </tr>

   
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type" defaultValue="Online">
                <option value="Online">Online</option>
                <option value="OnPaper">On Paper</option>
                <option value="NoSubmission">No Submission</option>
              </select>

              <div style={{ marginTop: 8 }}>
                <strong>Online Entry Options</strong>
                <br />
                <label htmlFor="wd-text-entry">
                  <input type="checkbox" id="wd-text-entry" /> Text Entry
                </label>
                <br />

                <label htmlFor="wd-website-url">
                  <input type="checkbox" id="wd-website-url" defaultChecked />{" "}
                  Website URL
                </label>
                <br />

                <label htmlFor="wd-media-recordings">
                  <input type="checkbox" id="wd-media-recordings" /> Media
                  Recordings
                </label>
                <br />

                <label htmlFor="wd-student-annotation">
                  <input type="checkbox" id="wd-student-annotation" /> Student
                  Annotation
                </label>
                <br />

                <label htmlFor="wd-file-upload">
                  <input type="checkbox" id="wd-file-upload" /> File Upload
                </label>
              </div>
            </td>
          </tr>

        
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
              <input id="wd-assign-to" defaultValue="Everyone" />
            </td>
          </tr>

         
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input id="wd-due-date" type="date" defaultValue="2024-05-13" />
            </td>
          </tr>

      
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input
                id="wd-available-from"
                type="date"
                defaultValue="2024-05-06"
              />
              &nbsp;&nbsp;&nbsp;
              <label htmlFor="wd-available-until">Until</label>
              &nbsp;
              <input
                id="wd-available-until"
                type="date"
                defaultValue="2024-05-20"
              />
            </td>
          </tr>

          <tr>
            <td />
            <td>
              <button type="button">Cancel</button>
              &nbsp;
              <button type="button">Save</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <b><label htmlFor="wd-name">Assignment Name</label></b><br /><br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br /><br />
        <table>
            <tr>
                <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
                </td>
                <td>
                <input id="wd-points" value={100} />
                </td>
            </tr><br />
            <tr>
                <td align="right" valign="top">
                    <label  htmlFor="wd-group"> Assignment Group </label>
                </td>
                <td>
                        <select id="wd-group">
                        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        <option value="QUIZZES">QUIZZES</option>
                        <option selected value="MIDTERM">
                            MIDTERM</option>
                        <option value="FINAL">FINAL</option>
                        </select>
                </td>
                </tr><br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="Percentage">Percentage</option>
                            <option value="Grade Point Average">Grade Point Average</option>
                            <option value="Total">Total</option>
                        </select>
                    </td>
                </tr><br />
                <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-submission-type">Submission Type</label>
                </td>
                <td>
                    <select id="wd-submission-type">
                        <option value="Online">Online</option>
                        <option value="In Person">In Person</option>
                        <option value="Carrier Pidgeon">Carrier Pidgeon</option>
                    </select>
                    <td align="left" valign="top">
                        <label>Online Entry Options</label><br />
                        <input type="checkbox" name="check-entry-options" id="wd-text-entry"/>
                        <label htmlFor="wd-text-entry">Text Entry</label><br/>
                        <input type="checkbox" name="check-entry-options" id="wd-website-url"/>
                        <label htmlFor="wd-website-url">Website URL</label><br/>
                        <input type="checkbox" name="check-entry-options" id="wd-media-recordings"/>
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
                        <input type="checkbox" name="check-entry-options" id="wd-student-annotation"/>
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
                        <input type="checkbox" name="check-entry-options" id="wd-file-upload"/>
                        <label htmlFor="wd-file-upload">File Upload</label><br/>
                    </td>
                </td>
            </tr><br />
            <tr>
                <td align="right" valign="top">
                    <label>Assign</label>
                </td>
                <td align="left" valign="top">
                    <label id="wd-assign-to">Assign to </label><br />
                    <input id="wd-assign-to" defaultValue="Everyone"/> <br /><br />
                    <label id="wd-due-date">Due </label><br />
                    <input type="date"
                        id="wd-due-date" value="2024-05-13"/><br /><br />
                    <table>
                        <tr>
                            <td>
                        <label id="wd-available-from">Available from</label><br />
                        <input type="date"
                            id="wd-available-from" value="2024-05-06"/>
                        </td>
                        <td>
                        <label id="wd-available-until">Until</label><br />
                        <input type="date"
                            id="wd-available-until" value= "2024-05-20"/><br />
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <hr />
      <table align="right">
            <tr>
                <td>
                    <button type="button" id="cancel-button">Cancel</button>
                </td>
                <td>
                    <button type="button"id="save-button">Save</button>
                </td>
            </tr>
        </table>
      </div>
  );}  
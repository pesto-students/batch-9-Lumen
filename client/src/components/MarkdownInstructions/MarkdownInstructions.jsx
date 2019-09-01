import React from 'react';
import { Header, Modal } from 'semantic-ui-react'

const MarkdownInstructions = () => {
  return (
    <div>
      <Modal trigger={<span style={{float:"right", color: "orange", cursor: "pointer"}}> help</span>}>
        <Modal.Header>Markdown Instructions</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Header> Heading 1</Header>
            <p>
              {"# heading  ↔️ <h1>heading</h1>"}
            </p>
            <Header> Heading 2</Header>
            <p>
              {"## heading  ↔️ <h2>heading</h2>"}
            </p>
            <p>..and so on</p>
            <Header> Bold</Header>
            <p>
              {"**BOLD**  ↔️ <strong>BOLD</strong>"}
            </p>
            <Header> Italics</Header>
            <p>
              {"*italics*  ↔️ <strong><em>italics</em><strong/>"}
            </p>
            <Header> Bold & Italics</Header>
            <p>
              {"***botalics***  ↔️ <em>botalics</em>"}
            </p>
            <Header> List items</Header>
            <p>
              {"* Item1   ↔️  <li>Item1</li>"}
            </p>
            <Header> How about some code</Header>
            <p>
              Place your code between three backticks like this ```code```
            </p>

            <Header> Horizontal rule </Header>
            <p> three or more underscores ___</p>
            
            <Header> Table </Header>
            <p> {`| Feature   | Support |`}</p>
            <p> {`| --------- | ------- |`}</p>
            <p> {`| tables    | ✔ |`}</p>
            <p> {`| alignment | ✔ |`}</p>
            <p> {`| wewt      | ✔ |`}</p>

            <Header> Video </Header>
            <p>!(http://lumen-video.com?video=url)</p>
            <p>!(http://lumen-video.com?video=https://www.w3schools.com/tags/movie.mp4)</p>

            <Header> Default iframe</Header>
            <p>!(iframe-url)</p>
            <p>!(https://codepen.io/snowleo208/embed/WajvaJ/?height=265&theme-id=0&default-tab=js,result)</p>

            <Header> Image </Header>
            <p>
                {"![caption](url)"}
            </p>
            <p>
                {"![Beautiful image](https://amp.businessinsider.com/images/562a71f9dd0895a8388b4593-750-405.png)"}
            </p>
            
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default MarkdownInstructions;

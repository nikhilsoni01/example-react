
import {  Form } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <>
    <section id='main' className='main-section'>

      <table>
        <tr><th>TimeSheet</th>
        <th>Spent time</th>
        <th>Total time</th></tr>
        <tr>
          <td>Nikhil</td>
          <td>2hrs</td>
          <td>8hrs</td>
        </tr>
      </table>

    </section>
    <section>
      <Form>
        <Form.Group>
        <Form.Input label='input1' id='input1' placeholder='type something here'>
        </Form.Input>
        <Form.Input label='input2' id='input2' placeholder='type something here'>
        </Form.Input>
        </Form.Group>
         
         <section style={{display: 'flex'}}> <button>cancel</button>
          <button>submit</button></section>
         
      
      </Form>
    </section>
    </>
  );
}

export default App;

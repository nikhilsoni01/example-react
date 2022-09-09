
import {  Form } from 'semantic-ui-react';
import './App.css';
import Table from './components/Table';

function App() {
  return (
    <>
    <Table col1='Time Sheet' col2='Spent time' col3='Total time'></Table>
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

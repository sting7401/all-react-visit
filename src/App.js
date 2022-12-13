import logo from './logo.svg';
import './App.css';
import Composition from './components/2-4-props/Composition';
import Extraction from './components/Extraction/Extraction';
import ClassComponent from './components/2-5-state/ClassComponent';
import FunctionComponent from './components/2-5-state/FunctionComponent';
import ClassComponent2 from './components/2-6-lifeCycle/ClassComponent';
import Event from './components/2-7-event/Event';
import Condition from './components/2-8-ConditionRender/Condition';
import List from './components/2-9-list/List';
import Form from './components/2-10-form/Form';
import UnControl from './components/2-10-form/UnControl';
import State from './components/3-3.hook/State';
import Reducer from './components/3-3.hook/Reducer';
import WelcomeDialog from './components/3-5-Composition/WelcomeDialog';
import ThankyouDialog from './components/3-6-Composition2/ThankyouDialog';
import Input from './components/3-7-Hoc/Input';
import Button from './components/3-7-Hoc/Button';

function App() {
	return (
		<div className='App'>
			<ClassComponent />
			<ClassComponent2 />
			<FunctionComponent />
			<Composition name='jim' />
			<Composition name='jim' />
			<Composition name='jim' />
			<Extraction />
			<Event />
			<Condition />
			<List />
			<Form />
			<UnControl />
			<State />
			<Reducer />
			<WelcomeDialog />
			<ThankyouDialog />

			<Input />
			<Button />
		</div>
	);
}

export default App;

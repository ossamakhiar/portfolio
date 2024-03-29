import Layout from './Layout';
import "../style/index.css"

function App() {
	return (
		<div className="App w-screen h-screen dark:bg-black">
			<Layout>
				<h1>Content</h1>
			</Layout>
			<h1 className="text-3xl font-bold underline">
			Hello world!
			</h1>
		</div>
	);
}

export default App

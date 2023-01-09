import { useState } from 'react'
import './App.css'
import { PhotoViewer } from './photoViewer/PhotoViewer'
import { ImageSelector } from './imageSelector/ImageSelector'

export function App() {
	const [selectedUrl, setSelectedUrl] = useState<string>("https://picsum.photos/id/10/200")
	const urlList = [];
	for (let i = 0; i < 20; i++) {
		const id = 10 + i;
		urlList.push(`https://picsum.photos/id/${id}/200`)
	}

	return (
		<div className="App">
			<h1>React Photo Viewer</h1>
			<PhotoViewer src={selectedUrl} />
			<ImageSelector images={urlList}
						   setSelectedUrl={setSelectedUrl} />
		</div>
	)
}

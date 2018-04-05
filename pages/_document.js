import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class extends Document {
	static async getInitialProps ({renderPage}) {
		const sheet = new ServerStyleSheet()
		const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
		const styleTags = sheet.getStyleElement()
		return {...page, styleTags}
	}

	render () {
		return (
			<html>
			<Head>
				<title>My page</title>
				<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.9/css/all.css"
				      integrity="sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1"
				      crossorigin="anonymous"/>
				<link rel="stylesheet" href="/_next/static/style.css"/>
				<link href="https://fonts.googleapis.com/css?family=Hind:400,300,500,600,700|Hind+Guntur:300,400,500,700" rel="stylesheet"
				      type="text/css"/>
				{this.props.styleTags}
			</Head>
			<body className="dark">
			<Main/>
			<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"/>
			<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
			        integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossOrigin="anonymous"/>
			<NextScript/>
			</body>
			</html>
		)
	}
}

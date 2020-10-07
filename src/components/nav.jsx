import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';


export default class nav extends React.Component {

    render() {
        return (
            <nav class="navbar navbar-expand-md navbar-dark">
                <link href="/your-path-to-fontawesome/css/fontawesome.css" rel="stylesheet"/>
                <link href="/your-path-to-fontawesome/css/brands.css" rel="stylesheet"/>
                <link href="/your-path-to-fontawesome/css/solid.css" rel="stylesheet"/>
                <div class="container">
                    <div></div>
                    <a href="/" class="navbar-brand" >KelsonFlint.com</a>
                </div>
            </nav>
        )
    }
}
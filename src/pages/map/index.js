import React from "react";
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  componentDidMount() {
    document.getElementById("map").src = "https://geosyncgo.com/public/wmu-advisory-app" + this.props.location.search;
  }
  
  render() {
    return (
      <Layout>
      <iframe id="map" title="map" src="about:blank"></iframe>
      </Layout>
    )
  }
}

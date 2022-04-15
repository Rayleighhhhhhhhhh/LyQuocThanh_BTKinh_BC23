import React, { Component } from 'react'
import dataGlasses from "../Data/dataGlasses"

export default class ChonKinh extends Component {

  state = {
    glassCurrent: {
      "id": 1,
      "price": 30,
      "name": "GUCCI G8850U",
      "url": "./glassesImage/v1.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
  }

  renderKinh = () => {
    return dataGlasses.map((item, index) => {
      return <img onClick={() => { this.chageGlass(item) }} className="ml-2 p-2 border border-width-1" key={index} src={item.url} style={{ width: '110px', cursor: "pointer" }} alt="model.png" />
    })
  }

  chageGlass = (newGlass) => {
    this.setState({
      glassCurrent: newGlass
    })
  }

  render() {
    return (
      <div >
        <div style={{ backgroundImage: 'url("./glassesImage/background.jpg")', backgroundSize: 2000, minHeight: 2000 }}>
          <style dangerouslySetInnerHTML={{ __html: "@keyframes animChangeGlasses {\n            from {\n                width: 0;\n                transform: rotate(45deg);\n                opacity:0;\n            }\n            to {\n                width:150px;\n                opacity:0.7;\n                transform: rotate(0deg);\n\n            }\n        }" }} />
          <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', minHeight: 2000 }}>
            <h3 className="text-center text-light p-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>TRY GLASSES APP ONLINE</h3>
            <div className="container">
              <div className="row mt-5 text-center">
                <div className="col-6">
                  <div className="position-relative">
                    <img className="position-absolute" src="./glassesImage/model.jpg" alt="model.jpg" style={{ width: 250 }} />
                    <img className="position-absolute glassesStyle" src={this.state.glassCurrent.url} style={{ width: 150, top: 75, right: 70, opacity: '0.7', transform: 'rotate(0deg)', animation: '2s ease 0s normal none running animChangeGlasses' }} />
                    <div className="position-relative " style={{ width: 250, top: 200, left: 270, paddingLeft: 15, backgroundColor: 'rgba(255, 127, 0, 0.5)', textAlign: 'left', height: 105 }}>
                      <span className="font-weight-bold" style={{ color: 'rgb(171, 130, 255)', fontSize: 17 }}>{this.state.glassCurrent.name}</span> <br />
                      <span style={{ fontSize: 14, paddingRight: 5, fontWeight: 400 }}>{this.state.glassCurrent.desc}</span>
                    </div></div></div>
                <div className="col-6">
                  <img src="./glassesImage/model.jpg" alt="model.jpg" style={{ width: 250 }} />
                </div></div></div>
            <div className="bg-light container text-center mt-5 d-flex justify-content-center p-5">
              {this.renderKinh()}

            </div></div></div>

      </div>
    )
  }
}

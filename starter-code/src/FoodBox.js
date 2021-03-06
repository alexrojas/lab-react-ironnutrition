import React, {Component} from 'react'

class FoodBox extends Component {
  constructor(props){
    super(props)

  }

  onAdding = (e) =>{
    console.log(e);
  }
  render(){
    // console.log(this.props)
    return(
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories} Calories</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value="1"
                />
              </div>
              <div className="control">
                <button onClick={e => this.onAdding(e)} className="button is-info">
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default FoodBox

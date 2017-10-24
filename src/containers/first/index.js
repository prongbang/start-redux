import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userActions from '../../redux/action/user'
import { Link } from 'react-router'
import './index.css'
import API from '../../api';

class FirstPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }

  componentWillMount() {
    //fetch("https://see-it-live.firebaseapp.com/cctv_lists.json")
    //.then((data)=>data.json())
    // API.getRepos('octocat').then((res)=>{
    //   console.log(res);
    //   this.setState({repos: res.data});
    // }).catch((err)=>{
    //   console.log(err);
    // });

    // object Spread syntax
    let state = {data: {playload: {email:'e@mail.com'}}}
    let obj = {state};   // {"state":{"data":{"playload":{"email":"e@mail.com"}}}}
    let oss = {...state} // {"data":{"playload":{"email":"e@mail.com"}}}
    
    let nextState = {data: {playload: {email:'update@mail.com'}}}
    let rsNextState = {...state, ...nextState}; 
    // {"data":{"playload":{"email":"update@mail.com"}}}

    console.log("state", JSON.stringify({state}));
    console.log("...state", JSON.stringify({...state}));

    console.log("next-state", JSON.stringify({...state, ...nextState}))

    let d = {x:1,y:2}
    let drs = {...state, ...d}
    // {"data":{"playload":{"email":"e@mail.com"}},"x":1,"y":2}
    console.log(JSON.stringify({...state, ...d}));

    let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
    x; // 1
    y; // 2
    z; // { a: 3, b: 4 }
    let n = { x, y, ...z };
    n; // { x: 1, y: 2, a: 3, b: 4 }

    console.log("n", n);

    this.arrSpreadOperator(1,2,3,4,5,6)


    this.func(...[1,2,3])
  }

  arrSpreadOperator(...args) {
    console.log("args", JSON.stringify(args));
  }

  func(x,y,z) {
    console.log(x,y,z);
  }

  loading(repos) {
    return !!repos ? repos.length === 0 ? <div>Loading...</div> : null : null;
  }

  onResultSecondPage(data) {
    // receive from SecondPage
  }

  componentDidMount() {
    this.props.userActions.set({
      payload: {
        email: "update@email.com"
      }
    })

    this.fetchUser()
    this.fetch2User()
  }

  render() {
    let loading = this.loading(this.state.repos);
    console.log(this.props)
    return (
      <div className='bold'>
        <p>
          First Page
        </p>
         <p>{'Email: ' + this.props.user.payload.email}</p> 
        <Link to={'/second'}>Second</Link>
        <h1>repos</h1>


        {/* show loading  */}
        {loading}

        {/* render data from api  */}
        <div>
          {
            this.state.repos.map((v, i)=>{
              console.log(v);
              return <div>
                <h3>{v.description}</h3>
              </div>
            })
          }
        </div>
      </div>
    )
  }

  async fetchUser() {  
    try { 
        const users = await fetch(`https://api.github.com/users`).then((res)=>res.json())
        console.log(users)
    } catch(error) {  
        // ถ้ามี Error ที่ถูก reject จาก Promise จะเข้าที่ catch
        console.error(error.message)   
    } 
  }

  async fetchByUser(user) {
    return await fetch(`https://api.github.com/users/${user}`).then(res=>res.json());
  }

  async fetch2User(user1 = 'mojombo',user2 = 'defunkt') {
    try {
        let [us1, us2] = await Promise.all([this.fetchByUser(user1), this.fetchByUser(user2)]);
        console.log("us1:",us1);
        console.log("us2:",us2);
    } catch(e) {
        console.error("error:",e.message)   
    }
  }

}

// map state user เข้าไปใน props
// เพื่อให้เรียกใช้แบบนี้ได้ this.props.user.email
const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstPage)

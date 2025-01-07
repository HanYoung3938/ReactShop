import { useState } from 'react'
import './App.css'
import { Navbar, Container, Nav, Row, Col} from 'react-bootstrap'
import bg from '/bg.png'
import data from './data.js'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './Detail.jsx'

function App() {

  let [shoes, 제목변경] = useState(data);
  let navigate = useNavigate();
  console.log(shoes)

  return (
    <div className='App'>
      <button onClick={()=>{
        let copy = [...shoes]
        copy.sort((a,b)=> a.title.toLowerCase() > b.title.toLowerCase() ? 1:-1)
        제목변경(copy)
       }}> 정렬버튼 </button>
 
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            shop
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
      <Routes>
        <Route path='/' element={
          <div>
            <div className='main-bg' style={{ backgroundImage : 'url(' + bg + ')' }}></div>
            <Row>
              {
                shoes.map(function(a, i){
                  return(
                    <Shu navigate={navigate} shoes={shoes} id={shoes[i].id} i={i}/>
                  )
                })
              }
            </Row>
          </div>
        } />
        <Route path='/detail/:id' element={ <Detail shoes={shoes} /> } />
       

       
        <Route path='*' element={ <div>404 없는 페이지 입니다 </div> } />
        <Route path='/about' element={ <About/> } >
          <Route path='one' element={ <div>첫주문시 양배추즙 서비스</div> }/>
          <Route path='two' element={ <div>생일기념 쿠폰받기</div> }/>
        </Route>
       
      </Routes>


      <Link to='/'>홈</Link>
      <p></p>
      <Link to='/detail'>상세페이지</Link>

    </div>
  )
}

export default App


function About(){
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Shu(props){

  return(
    <Col sm={4} onClick={()=>{ props.navigate('/detail/'+props.id) }}>  
      <img src={ import.meta.env.BASE_URL + 'shoes' +(props.id+1) +'.jpg'} width='80%'/>
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].content}</p>
    </Col>
  )
}
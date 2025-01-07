import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Detail(props){

  let {id} = useParams();
  let a = props.shoes.find((x)=> x.id == id )
  let [alert, setAlert] = useState(true);
  let [count, setCount] = useState(0);
  let [탭, 탭변경] = useState(0);

  // // 1. 랜더링 할때마다 코드 실행 
  // useEffect(()=>{ 실행할코드 })

  // // 2. 컴포넌트 mount시 1회만
  // useEffect(()=>{ 실행할코드 }, [])

  // // 3. useEffect 코드 실행전에 항상 실행
  // useEffect(()=>{
    
  //   return()=>{
  //     실행할코드
  //   }
  // })
  // // 4. state가 변경될때마다 실행
  // useEffect(()=>{ 
  //   실행할코드
  // }, [state])


  useEffect(()=>{
    //그 다음에 실행됨
    setTimeout(()=>{ setAlert(false) }, 2000)
    return ()=>{
      //여기있는게 먼저 실행됨
      //타이머 제거, 서버연결 ajax 중지
      clearTimeout(a)
    }
  }, [count])  //mount

  return(
    <div className="container">
      <button onClick={()=>{ setCount(count+1) }} >버튼</button>
      {count}
      {/* 삼항연산자    alert == true ? 보여준다: 안보여준다 */}
      {/* {
        alert == true ? 
        <div className="alert alert-warning">
          3초이내 구입시 할인 
        </div>
        : null
      } */}
      

      <div className="row">
        <div className="col-md-6">
          <img src={ import.meta.env.BASE_URL + 'shoes'+ (parseInt(id)+1) +'.jpg'} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{a.title}</h4>
          <p>{a.content}</p>
          <p>{a.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
      <Nav fill variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{ 탭변경(0) }}>Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{ 탭변경(1) }}>Loooonger NavLink</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={()=>{ 탭변경(2) }}>Link</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭}/>

    </div>
  )
}

function TabContent(props){

  let [fade, setFade] = useState('');

  useEffect(()=>{
    setTimeout(()=>{ setFade('end') }, 100)

    return ()=>{
      setFade('')
    }
  }, [props.탭])

  return<div className={"start " + fade}> 
    {[<div>내용0</div>,<div>내용1</div>,<div>내용2</div>][props.탭]}
  </div>
}


export default Detail;
function Box(props){
    const clickMe = () => {
    alert("props 강의 끝!!")
    }

    return(
    <div className='box'>
      box<br/>
      {props.num}<br/>
      {props.name}<br/>
      <button onClick={clickMe}>눌러봐</button>
    </div>
    )
}

export default Box;

/*
   <Box name="진희" num="27"/>
   <Box name="윤지" num="23"/>
   <Box name="행쇼" num="012"/>
*/

/* props란?
- 리액트에서 컴포넌트에 전달되는 데이터나 설정값을 의미
- 부모 컴포넌트가 자식 컴포넌트에 주는 입력값
*/
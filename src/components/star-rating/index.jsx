// 컴포넌트를 만들어서 내보낸다 -> export

// 리액트 아이콘 설치 
// npm install react-icons
import {FaStar} from 'react-icons/fa';
// 전용 css 연결
import './styles.css';
import { useState } from 'react';
import { FaS } from 'react-icons/fa6';


export default function StarRating({starCount=5}) {

    // starCount(별개수)는 5개를 기본값으로, 컴포넌트를 사용하는 곳에서 정할 수 있게 매개변수로 설정
    // state 2개 만들기 -> 별점, 마우스오버 위치
    let [score, setScore] = useState(0);
    let [hover, setHover] = useState(0);

    // 배열 : 총 별 갯수 (starCount) -> 반복문 map
    let stars = []; // 그려줄 별 갯수를 배열 크기로 설정
    for(let i=0; i<starCount; i++){
        stars.push(i+1);
    }

    function handleMouseClick(element) {
        // 클릭한 별에 setScore()
        console.log(element);
        setScore(element);  // set : 비동기
    }

    function handleMouseMove(element) {
        // 마우스 들어간 별에 setHover(별점)
        // 어느 별 위에 있는지 매개변수로 받아와야 함
        setHover(element);
    }

    function handleMouseLeave() {
        // 마우스 나간 별에 setHover()
        // 점수랑 동일하게 맞춘다 (색깔 맞추기 위해)
        setHover(score);
    }

    return (
        <>
            <div>
                {
                    // JSX 안에 자바스크립트 넣으려면 {} 
                    // map : 배열의 갯수만큼 반복, 첫번째는 각 내부요소의 값, 두번째는 인데스(위치)
                    // map안에 콜백함수를 넣어서 동작
                    stars.map((e, idx)=> {
                        // e : 내부 요소 각각의 값
                        // idx : 배열 위치값

                        // 반복적으로 생성할 HTML(JSX)은 return에 작성
                        return(
                            <FaStar size={40} key={e}
                            // 마우스가 올라가 있거나, 선택된 상태면 클래스명 변경 (클릭, 마우스무브, 마우스리브)
                            // 삼항연산자를 써서 상황에 따라 클래스명 변경 (5개에 대해)
                                className={e <= (hover || score) ? 'active' : 'inacitve'}
                                onClick={()=>{handleMouseClick(e)}}
                                onMouseMove={()=>{handleMouseMove(e)}}
                                onMouseLeave={()=>{handleMouseLeave()}}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}
import './Product.css'
import Product_bg from './../../components/images/Product/Product_bg.png'
import car_airflow from './../../components/images/Product/car_airflow.png'
import Dblock_filter from './../../components/images/Product/Dblock_filter.png'
import box1_activatedcarbon from './../../components/images/Product/box1_activatedcarbon.png'

const Product = ()=>{
  return (
    <div className='Product'>
        <h2 className='Product_bg'><img src={ Product_bg } alt="Product_배경" />Product 당신의 생활이 더욱 안전하고 편리하길 바라는 린케어는 자동차 전반에 걸친 라이프 스타일 솔루션을 연구하며
            다음과 같은 제품과 서비스를 제공합니다</h2>
        <div className='Product_Wrap'>
            <div className='CabinFilter'>
                <div className='CabinFilter_1'>
                    <h3>차량용 에어컨필터 <span>Cabin Filter</span></h3>
                    <p> 도로 위를 달리는 자동차 안 공기를 생각해본 적 있나요?<br />
                        차량용 에어컨 필터(cabin filter)는 자동차 외부에서 들어오는 공기와 내부에서 순환하는<br />
                        공기가 모두 거치게 되기 때문에 필터 하나만 바꿔도<br />
                        차량에서 순환하는 모든 공기를 강력하게 개선할 수 있습니다<br />
                        그래서 디블럭이 연구와 개발을 통해 제대로 만들었습니다.</p>
                </div>
                <div className='CabinFilter_2'>
                    <p><img src={ car_airflow } alt="자동차공기흐름도" />자동차공기흐름도</p>
                </div>
            </div>

            <div className='Dblock_filter'>
                <h3>DBLOCK 차량용 에어컨필터 <span>고급 야자수 활성탄으로 만든 EPA11 등급의 프리미엄 에어컨필터</span></h3>
                <p><img src={ Dblock_filter } alt="디블럭필터 제품사진" />디블럭필터 제품사진</p>
            </div>

            <div className='Special'>
                <h3>디블럭이 다른 이유  <span>What’s Special?</span></h3>
                <div className='Special1'>
                    <div className='Special1_1'>
                        <h3>일반활성탄이 아닌 <span>고급 야자활성탄으로</span></h3>
                        <p>
                        야자활성탄은 야자수열매에서 나오는 활성탄의 한 종류로 <br />
                        일반활성탄보다 <span>흡착력이 뛰어나 냄새제거,공기정화 능력이<br />
                        뛰어납니다.</span> 디블럭은 그중에서도 <span>흡착력이 더욱 뛰어난 <br />
                        고급 야자수 활성탄을 사용했습니다</span>
                        </p>
                    </div>
                    <div className='Special1_2'>
                     <p><img src={ box1_activatedcarbon } alt="디블럭제품 실제 야자수활성탄 들어가있는사진" />디블럭제품 실제 야자수활성탄 들어가있는사진</p>
                    </div>
                </div>
                <div className='Special2'>
                    
                </div>
                <div className='Special3'>

                </div>
                <div className='Special4'>

                </div>
                <div className='Special5'>

                </div>
                <div className='Special6'>

                </div>
            </div>


        </div>
    </div>
    );

}
export default Product
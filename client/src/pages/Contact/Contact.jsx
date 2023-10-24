import "./Contact.css";
import Contact_bg from "./../../components/images/Contact/Contact.png";
import call from "./../../components/images/Contact/call.png";
import email from "./../../components/images/Contact/email.png";
import { useCallback } from "react";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="Contact_bg">
        <p>
          <img src={Contact_bg} alt="lyncare Contact" />
          lyncare Contact
        </p>
      </div>
      <div className="Context_form">
        <div className="Contact_text">
          <h3>문의</h3>
          <h4>신청시 자동으로 개인정보 수집 및 이용에 동의처리 됩니다.</h4>
          <div className="text_list">
            <div className="Company_info">
              <ul>
                <li className="middle">Company info</li>
                <li>
                  <input type="text" value="회사명" />
                </li>
                <li>
                  <input type="text" value="회사전화" />
                </li>
                <li>
                  <input type="email" value="이메일" />
                </li>
              </ul>
            </div>

            <div className="Contact_info">
              <ul>
                <li className="middle">Contact info</li>
                <li>
                  <input className="name" type="text" value="담당자" />
                </li>
                <li>
                  <input type="text" value="휴대폰" />
                </li>
              </ul>
            </div>
          </div>

          <div className="Inquiry_details">
            <p>
              <input type="text" value="문의내용" />
            </p>
            <button>접수하기</button>
          </div>
        </div>

        <div className="Lyncare_Contact">
          <div className="Lyncare_Contact_bg">
            <h5>Lyncare Contact</h5>
            <ul>
              <li>02 - 6956 - 7985</li>
              <li>1833-7098</li>
              <li>lyncare@lyncare.co.kr</li>
            </ul>
          </div>
          <div className="Lyncare_Contact_bg_m ">
            <h5>Lyncare Contact</h5>
            <ul>
              <li>
                <img src={call} alt="lyncare 서울전화번호" />
                02 - 6956 - 7985
              </li>
              <li>
                <img src={call} alt="lyncare 대표전화번호" />
                1833-7098
              </li>
              <li>
                <img src={email} alt="lyncare email" />
                lyncare@lyncare.co.kr
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;

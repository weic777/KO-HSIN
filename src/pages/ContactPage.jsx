import '../css/ContactPage.css';
import contactTitle from '../assets/contact-title.svg';

function ContactPage() {
  return (
    <div className="App">
      <div className="contact-container">
        {/* 標題區塊 */}
        <section className="contact-title-section">
          <img
            src={contactTitle}
            alt="聯絡資訊標題圖"
          />
        </section>

        {/* 黑色線條 */}
        <div className="line-grow"></div>

        {/* 底色包裹區塊 */}
        <div className="contact-content">
          {/* 聯絡方式區塊 */}
          <section className="contact-info fade-up-delay">
            <h2 className="contact-heading">謝謝您造訪本網站</h2>
            <h2 className="contact-subheading">有任何問題或邀約歡迎使用下面的表格詢問我</h2>
            <p className="contact-text">在極少數情況下 可能會出現聯絡表單提交錯誤</p>
            <p className="contact-text">如果您在 1-2 個工作天內未收到回覆或無法透過表單傳送</p>
            <p className="contact-text">請直接透過我的信箱「anna0826777@gmail.com」與我聯繫</p>
          </section>

          {/* 聯絡表單區塊 */}
          <div className="form-wrapper">
            <section className="contact-form">

              {/* 姓名 */}
              <div className="form-row">
                <div className="form-label">
                  <span className="label-zh">公司名稱 </span>
                  <span className="label-en">Company Name</span>
                </div>
                <input className="form-input" type="text" placeholder="請輸入姓名" />
              </div>

              {/* 信箱 */}
              <div className="form-row">
                <div className="form-label">
                  <span className="label-zh">聯絡人姓名</span>
                  <span className="label-en">Contact Name</span>
                </div>
                <input className="form-input" type="email" placeholder="請輸入信箱" />
              </div>

              {/* 電話 */}
              <div className="form-row">
                <div className="form-label">
                  <span className="label-zh">職稱</span>
                  <span className="label-en">Job Title</span>
                </div>
                <input className="form-input" type="tel" placeholder="請輸入電話" />
              </div>

              {/* 主題 */}
              <div className="form-row">
                <div className="form-label">
                  <span className="label-zh">聯絡信箱</span>
                  <span className="label-en">Email</span>
                </div>
                <input className="form-input" type="text" placeholder="請輸入主題" />
              </div>

              {/* 公司 */}
              <div className="form-row">
                <div className="form-label">
                  <span className="label-zh">聯絡電話</span>
                  <span className="label-en">Phone</span>
                </div>
                <input className="form-input" type="text" placeholder="請輸入公司名稱" />
              </div>

              {/* 網站 */}
              <div className="form-row">
                <div className="form-label">
                  <span className="label-zh">合作需求類型</span>
                  <span className="label-en">Inquiry Type</span>
                </div>
                <input className="form-input" type="url" placeholder="請輸入網站網址" />
              </div>

              {/* 留言 */}
              <div className="form-row">
                <div className="form-label">
                  <span className="label-zh">留言</span>
                  <span className="label-en">Message</span>
                </div>
                <textarea className="form-input" rows="5" placeholder="請輸入留言內容"></textarea>
              </div>

            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

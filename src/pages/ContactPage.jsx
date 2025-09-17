import '../css/ContactPage.css';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import contactTitle from '../assets/contact-title.svg';
import x from '../assets/x.svg';

function ContactPage() {
  const formRef = useRef(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    company: '',
    contactName: '',
    jobTitle: '',
    email: '',
    phone: '',
    inquiry: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showBottomSvg, setShowBottomSvg] = useState(false);

  const inquiryOptions = [
    '專案合作 / Project Collaboration',
    '長期合作 / Long-term Partnership',
    '職缺應徵 / Job Opportunity'
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowBottomSvg(true), 10000); // 10秒後顯示
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSelect = (option) => {
    setFormData({ ...formData, inquiry: option });
    setErrors({ ...errors, inquiry: '' });
    setDropdownOpen(false);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.company) newErrors.company = '公司名稱為必填';
    if (!formData.contactName) newErrors.contactName = '聯絡人姓名為必填';
    if (!formData.jobTitle) newErrors.jobTitle = '職稱為必填';
    if (!formData.email) newErrors.email = 'Email為必填';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email格式錯誤';
    if (!formData.phone) newErrors.phone = '聯絡電話為必填';
    else if (!/^\d{8,15}$/.test(formData.phone)) newErrors.phone = '電話格式錯誤';
    if (!formData.inquiry) newErrors.inquiry = '請選擇合作類型';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    formRef.current.submit();
  };

  return (
    <div className="App">
      <div className="contact-container">
        <section className="contact-title-section">
          <img src={contactTitle} alt="聯絡資訊標題圖" />
        </section>
        <div className="line-grow"></div>

        <div className="contact-content">
          <section className="contact-info fade-up-delay">
            <h2 className="contact-heading">謝謝您造訪本網站</h2>
            <h2 className="contact-subheading">有任何問題或邀約歡迎使用下面的表格詢問我</h2>
            <p className="contact-text">在極少數情況下可能會出現聯絡表單提交錯誤</p>
            <p className="contact-text">如果您在 1-2 個工作天內未收到回覆或無法透過表單傳送</p>
            <p className="contact-text">請直接透過我的信箱「anna0826777@gmail.com」與我聯繫</p>
          </section>

          <div className="form-wrapper">
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              action="https://formspree.io/f/mdkllgzd"
              method="POST"
              ref={formRef}
            >
              {[
                { name: 'company', zh: '公司名稱', en: 'Company Name', type: 'text' },
                { name: 'contactName', zh: '聯絡人姓名', en: 'Contact Name', type: 'text' },
                { name: 'jobTitle', zh: '職稱', en: 'Job Title', type: 'text' },
                { name: 'email', zh: '聯絡信箱', en: 'Email', type: 'email' },
                { name: 'phone', zh: '聯絡電話', en: 'Phone', type: 'tel' },
              ].map((field) => (
                <div className="form-row" key={field.name}>
                  <div className="form-label">
                    <span className="label-zh">{field.zh} <span className="required-star">*</span></span>
                    <span className="label-en">{field.en}</span>
                  </div>
                  <div className="input-wrapper">
                    <input
                      name={field.name}
                      type={field.type}
                      className={`form-input ${errors[field.name] ? 'input-error' : ''}`}
                      value={formData[field.name]}
                      placeholder={`請輸入${field.zh}`}
                      onChange={handleChange}
                    />
                    {errors[field.name] && <div className="error-text">{errors[field.name]}</div>}
                  </div>
                </div>
              ))}

              {/* 合作需求類型下拉選單 */}
              <div className="form-row">
                <div className="form-label">
                  <span className="label-zh">合作需求類型 <span className="required-star">*</span></span>
                  <span className="label-en">Inquiry Type</span>
                </div>
                <div className="input-wrapper">
                  <div
                    className={`custom-select ${errors.inquiry ? 'input-error' : ''}`}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <span className={`select-placeholder ${!formData.inquiry ? '' : 'selected'}`}>
                      {formData.inquiry || '請選擇合作類型'}
                    </span>
                    <span className={`arrow ${dropdownOpen ? 'up' : 'down'}`}></span>
                  </div>
                  {dropdownOpen && (
                    <div className="dropdown-options">
                      {inquiryOptions.map((option, idx) => (
                        <div
                          key={idx}
                          className="dropdown-option"
                          onClick={() => handleSelect(option)}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                  {errors.inquiry && <div className="error-text">{errors.inquiry}</div>}
                </div>
              </div>

              {/* 留言欄位 */}
              <div className="form-row textarea-row">
                <div className="form-label">
                  <span className="label-zh">留言</span>
                  <span className="label-en">Message</span>
                </div>
                <textarea
                  name="message"
                  className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                  placeholder="請輸入留言內容"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <div className="error-text">{errors.message}</div>}
              </div>

              <div style={{ marginTop: '5vh', textAlign: 'center' }}>
                <button type="submit" className="submit-btn">送出</button>
              </div>
            </form>
          </div>
        </div>
      </div>

{/* 底部 SVG */}
{showBottomSvg && (
  <div className="contact-contact-svg-wrapper">
    
    {/* 圓圈 + 文字 點擊區 */}
    <div className="click-area" onClick={() => navigate('/contact')}>
      <svg viewBox="0 0 150 150" width="100%" height="100%">
        <circle className="contact-circle" cx="75" cy="75" r="50" fill="none" transform="rotate(-45 75 75)" />
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="20" fontWeight="bold" fill="black">
          <tspan x="50%" dy="-0.6em">下載</tspan>
          <tspan x="50%" dy="1.2em">履歷</tspan>
        </text>
      </svg>
    </div>

    {/* x 按鈕，絕對定位 + transform，獨立 */}
    <img
      src={x}
      alt="close"
      className="contact-resume-close"
      onClick={(e) => { 
        e.stopPropagation(); 
        setShowBottomSvg(false); 
      }}
    />

  </div>
)}










    </div>
  );
}

export default ContactPage;

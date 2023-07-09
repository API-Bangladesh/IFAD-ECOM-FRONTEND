import { useRef } from 'react';
import { AiOutlineBars } from "react-icons/ai";
import Link from "next/link";
import NavDropdown from "react-bootstrap/NavDropdown";

function Overlay() {
  const overlayRef = useRef();

  const openSearch = () => {
    overlayRef.current.style.width = '100%';
  };

  const closeSearch = () => {
    overlayRef.current.style.width = '0%';
  };

  return (
    <>
      <div className='main'>
        <button onClick={openSearch} className='open-button'>
									<AiOutlineBars className='font-30 overlay-icon me-4'/>
        </button>
      </div>

      <div ref={overlayRef} className='overlay'>
        <button className='close-button' onClick={closeSearch}>
          &times;
        </button>
        <div className='overlay-content text-uppercase font-24 fw-semibold'>
          <ul className='lh-lg'>
            <li>
              <Link href="/" onClick={closeSearch} className='overlay-content-itema'>home</Link>
            </li>
            <li>
                <NavDropdown
                  className="p-0  rounded-0 about-btn"
                  title={
                    <span className="overlay-content-itema text-white text-inter py-2 font-24 me-3 d-flex all-side-icons align-items-center">about us</span>
                  }
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item className="text-capitalize all-icons text-dark px-4 py-2 d-block">
                    <Link href="/review/Creview" className="cate-drop" onClick={closeSearch}>
                      Company Review
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-capitalize all-icons text-dark px-4 py-2 d-block">
                    <Link href="/bod/Bod" className="cate-drop" onClick={closeSearch}>
                      Board of directors
                    </Link>
                  </NavDropdown.Item>
								</NavDropdown>
            </li>
            <li>
              <Link href="/termsAndcondition/TermsAndConditions" onClick={closeSearch} className='overlay-content-itema'>terms & conditons</Link>
            </li>
            <li>
              <Link href="/privacypolicy/PrivacyPolicy" onClick={closeSearch} className='overlay-content-itema'>privacy policy</Link>
            </li>
            <li>
              <Link href="/deliveryinformation/DeliveryInformation" onClick={closeSearch} className='overlay-content-itema'>delivery</Link>
            </li>
            <li>
              <Link href="/contactinformation/ContactInformation" onClick={closeSearch} className='overlay-content-itema'>contacts</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Overlay;
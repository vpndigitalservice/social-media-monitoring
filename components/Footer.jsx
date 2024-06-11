"use client"
import react from 'react';

function Footer() {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content flex justify-center" style={{backgroundColor : '#4D869C'}}>
        <div className="flex flex-col md:flex-row justify-between w-full max-w-5xl text-white">
          <nav className="mb-4 md:mb-0 md:mr-8">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Service 1</a><br/>
            <a className="link link-hover">Service 2</a><br/>
            <a className="link link-hover">Service 3</a><br/>
            <a className="link link-hover">Service 4</a><br/>
            {/* <a className="link link-hover">Advertisement</a><br/> */}
          </nav>
          <nav className="mb-4 md:mb-0 md:mr-8">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a><br/>
            <a className="link link-hover">Contact</a><br/>
            {/* <a className="link link-hover">Jobs</a><br/> */}
            {/* <a className="link link-hover">Press kit</a><br/> */}
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a><br/>
            <a className="link link-hover">Privacy policy</a><br/>
            {/* <a className="link link-hover">Cookie policy</a><br/> */}
          </nav>
        </div>
      </footer>
    );
}

export default Footer
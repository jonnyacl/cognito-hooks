import React from "react";

const FractalLogoSvg = (color, width) => {
    if (!color) {
        color = "#ECB345"
    }
    if (!width) {
        width="130"
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} viewBox="0 0 132 46"><path fill={color} fillRule="nonzero" d="M0 0h31.263v2.267H16.742v12.31h14.52v16.845H16.782V46H0V29.155h14.522v-12.31H0V0zm2.258 2.267v12.31h12.264V2.268H2.258v-.001zM16.78 16.845v12.31h12.263v-12.31H16.78zM2.258 31.422v12.311h12.264v-12.31H2.258v-.001zm42.9-14.064h9.552v2.06h-7.307v3.585h6.49v2.06h-6.49v5.314h-2.245V17.358zm16.616 6.51c.778 0 1.4-.206 1.828-.577.466-.412.7-.906.7-1.607v-.04c0-.701-.234-1.237-.66-1.608-.43-.37-1.09-.535-1.868-.535h-3.15v4.367h3.15zm-5.288-6.427h5.483a6.38 6.38 0 0 1 2.061.33c.583.247 1.088.535 1.477.947.31.37.584.783.739 1.236.195.453.272.989.272 1.566v.04c0 .536-.077 1.03-.233 1.443-.155.412-.35.824-.623 1.112-.26.327-.576.605-.932.824-.35.247-.74.412-1.167.536l3.305 4.902h-2.527l-3.033-4.532h-2.722v4.532h-2.139V17.358l.04.083zm20.75 7.778l-2.177-5.158-2.139 5.158h4.317zm-3.128-7.86h2.02l5.503 13.018h-2.336l-1.267-3.111H72.13l-1.267 3.111h-2.257l5.503-13.019v.001zm14.638 12.979c-.892 0-1.708-.16-2.483-.516-.776-.318-1.397-.794-1.98-1.35-.541-.595-1.008-1.27-1.318-2.064a6.864 6.864 0 0 1-.465-2.54v-.04c0-.913.155-1.746.465-2.5a6.02 6.02 0 0 1 1.319-2.064c.582-.596 1.242-1.072 2.018-1.39.775-.357 1.629-.516 2.56-.516.543 0 1.086.04 1.513.16.466.079.893.237 1.281.396.387.159.736.397 1.086.635.31.238.62.516.93.794l-1.396 1.627a6.63 6.63 0 0 0-1.551-1.11 4.04 4.04 0 0 0-1.863-.438c-.582 0-1.125.12-1.63.358-.504.238-.93.555-1.28.952a4.602 4.602 0 0 0-.853 1.39 5.104 5.104 0 0 0-.31 1.706v.04c0 .595.116 1.19.31 1.746s.466 1.032.854 1.43a3.9 3.9 0 0 0 1.28.952c.51.24 1.067.361 1.63.357.736 0 1.395-.159 1.939-.437a6.181 6.181 0 0 0 1.59-1.19l1.397 1.429c-.31.357-.66.635-.97.913a5.47 5.47 0 0 1-1.125.714 4.322 4.322 0 0 1-1.319.437c-.465.119-1.008.158-1.552.158l-.078-.04.001.001zm11.72-10.878h-4.071v-2.102h10.42v2.102h-4.07v10.917h-2.28V19.46zm15.85 5.759l-2.178-5.158L112 25.219h4.315zm-3.129-7.86h2.02l5.503 13.018h-2.336l-1.266-3.111h-5.9l-1.268 3.111h-2.256l5.503-13.019v.001zm10.128 0h2.161v10.958H132v2.06h-8.685V17.358v.001z"/></svg>
    );
}

const AppsSvg = (color, width, height) => {
    if (!color) {
        color = "currentColor"
    }
    if (!width) {
        width="26"
    }
    if (!height) {
        height="23"
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20"><g fill="none" fillRule="evenodd"><path d="M-2-2h24v24H-2z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.2 1A1.8 1.8 0 0 1 19 2.8v14.4a1.8 1.8 0 0 1-1.8 1.8H2.8A1.8 1.8 0 0 1 1 17.2V2.8A1.8 1.8 0 0 1 2.8 1"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.6 12L10 9.3 6.4 12V1h7.2v9z"/></g></svg>
    );
}

const AuthSvg = (width, height) => {
    if (!width) {
        width="26"
    }
    if (!height) {
        height="23"
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 22 24"><g fill="none" fillRule="evenodd"><path d="M-1 0h24v24H-1z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.11 11.621h7.586v5.31H7.11z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.628 11.62V9.346a2.276 2.276 0 1 1 4.552 0v2.276"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.007 13.897a9.103 9.103 0 0 1-18.207 0V3.276L10.903 1l9.104 2.276v10.62z"/></g></svg>
    );
}

const CompanySvg = (width, height) => {
    if (!width) {
        width="26"
    }
    if (!height) {
        height="23"
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 22 21"><g fill="none" fillRule="evenodd"><path d="M-1-1h24v24H-1z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.433 19.867h-3.8V11H2.9M11.767 4.667V1.5l8.866 3.167v15.2h-15.2V7.2h7.6v12.455M17 16.067V8M9.3 16.067V11"/></g></svg>
    );
}

const BankingSvg = (width, height) => {
    if (!width) {
        width="26"
    }
    if (!height) {
        height="23"
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 22 19"><g fill="none" fillRule="evenodd"><path d="M-1-3h24v24H-1z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 4.636h20M1 8.273h20M19.182 17.364H2.818A1.818 1.818 0 0 1 1 15.545V2.818C1 1.814 1.814 1 2.818 1h16.364C20.186 1 21 1.814 21 2.818v12.727a1.818 1.818 0 0 1-1.818 1.819zM4.636 12.818h4.546M15.545 12.818h1.819"/></g></svg>
    );
}

const AccountingSvg = (width, height) => {
    if (!width) {
        width="26"
    }
    if (!height) {
        height="23"
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 22 22"><g fill="none" fillRule="evenodd" transform="translate(-1 -1)"><path d="M0 0h24v24H0z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 12h5.455l2.727-4.545 3.636 9.09L16.545 12H22"/><circle cx="12" cy="12" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></g></svg>
    );
}

const ProfileSvg = (width, height) => {
    if (!width) {
        width="26"
    }
    if (!height) {
        height="23"
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 22 22"><g fill="none" fillRule="evenodd" transform="translate(-1 -1)"><path d="M0 0h24v24H0z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 19.715v-.678c0-.979-.525-1.882-1.375-2.368l-2.926-1.674M9.934 14.993L7.01 16.669a2.727 2.727 0 0 0-1.375 2.368v.678"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15.636A3.637 3.637 0 0 1 8.364 12v-1.818a3.637 3.637 0 0 1 7.273 0V12A3.637 3.637 0 0 1 12 15.636z"/><circle cx="12" cy="12" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></g></svg>
    );
}

const LogoutSvg = (width, height) => {
    if (!width) {
        width="26"
    }
    if (!height) {
        height="23"
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 19"><g fill="none" fillRule="evenodd"><path d="M0-3h24v24H0z"/><g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M7.39 13.571c1.467 2.515 4.191 4.19 7.229 4.19 4.61 0 8.381-3.77 8.381-8.38C23 4.771 19.229 1 14.619 1 11.476 1 8.857 2.676 7.39 5.19M15.667 9.381H1M4.143 12.524L1 9.38l3.143-3.143"/></g></g></svg>
    );
}

const LoginSvg = (width, height) => {
    if (!width) {
        width="26"
    }
    if (!height) {
        height="23"
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" transform="scale(-1,1)" width={width} height={height} viewBox="0 0 24 19"><g fill="none" fillRule="evenodd"><path d="M0-3h24v24H0z"/><g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M7.39 13.571c1.467 2.515 4.191 4.19 7.229 4.19 4.61 0 8.381-3.77 8.381-8.38C23 4.771 19.229 1 14.619 1 11.476 1 8.857 2.676 7.39 5.19M15.667 9.381H1M4.143 12.524L1 9.38l3.143-3.143"/></g></g></svg>
    );
}

const EmptyApps = (width, action) => {
    if (!width) {
        width="180"
    }
    return (
        <svg onClick={() => action()} viewBox="0 0 134 141" width={width} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stopColor="#F2F2F2" offset="0%"/><stop stopColor="#F4F4F4" offset="100%"/></linearGradient></defs><g transform="translate(.5)" fill="none" fillRule="evenodd"><path d="M11 45.152h12.214l3.592 5.971a2 2 0 0 0 1.712.969l74.818.06.001 14.061a2 2 0 0 1-2.001 2L11 68.153a2 2 0 0 1-1.999-2l-.001-19a2 2 0 0 1 2-2z" fill="#C8C8C8"/><rect fill="#E0E0E0" transform="rotate(15 63.635 68.62)" x="30.135" y="23.12" width="67" height="91" rx="2"/><rect fill="#FAFAFA" transform="rotate(30 81.987 56.5)" x="48.487" y="11" width="67" height="91" rx="1"/><path d="M4.315 61.152h124.37a4 4 0 0 1 3.988 4.303l-5.392 71a4 4 0 0 1-3.989 3.697H9.708a4 4 0 0 1-3.989-3.697l-5.392-71a4 4 0 0 1 3.988-4.303z" fill="url(#a)"/></g></svg>
    );
}

const EmptyAppsSidebar = (width, height, action) => {
    if (!width) {
        width="26"
    }
    if (!height) {
        height="23"
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => action()} viewBox="0 0 134 141" width={width} height={height}><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stopColor="#F2F2F2" offset="0%"/><stop stopColor="#F4F4F4" offset="100%"/></linearGradient></defs><g transform="translate(.5)" fill="none" fillRule="evenodd"><path d="M11 45.152h12.214l3.592 5.971a2 2 0 0 0 1.712.969l74.818.06.001 14.061a2 2 0 0 1-2.001 2L11 68.153a2 2 0 0 1-1.999-2l-.001-19a2 2 0 0 1 2-2z" fill="#C8C8C8"/><rect fill="#E0E0E0" transform="rotate(15 63.635 68.62)" x="30.135" y="23.12" width="67" height="91" rx="2"/><rect fill="#FAFAFA" transform="rotate(30 81.987 56.5)" x="48.487" y="11" width="67" height="91" rx="1"/><path d="M4.315 61.152h124.37a4 4 0 0 1 3.988 4.303l-5.392 71a4 4 0 0 1-3.989 3.697H9.708a4 4 0 0 1-3.989-3.697l-5.392-71a4 4 0 0 1 3.988-4.303z" fill="url(#a)"/></g></svg>
    );
}

export { FractalLogoSvg, AppsSvg, AccountingSvg, AuthSvg, BankingSvg, ProfileSvg, CompanySvg, LogoutSvg, LoginSvg, EmptyApps, EmptyAppsSidebar };
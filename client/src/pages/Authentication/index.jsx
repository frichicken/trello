import { useEffect } from 'react';
import { AppleLogo, GoogleLogo, MicrosoftLogo, SlackLogo, TrelloLogo } from './assets/icons';

function SvgIcon({
    children,
    size = '24px',
    color = 'currentColor',
    fill = 'inherit',
    className = '',
    style = {}
}) {
    return (
        <span
            style={{
                fill,
                color,
                ...style
            }}
            className={`w-[${size}] h-[${size}] ${className}`}
        >
            {children}
        </span>
    );
}

function SvgLogo({
    children,
    width = 'auto',
    height = '24px',
    color = 'currentColor',
    fill = 'inherit',
    className = '',
    style = {}
}) {
    return (
        <span
            style={{
                fill,
                color,
                ...style
            }}
            className={`w-[${width}] h-[${height}] ${className}`}
        >
            {children}
        </span>
    );
}

function AuthenticationProvider({ provider = '', icon = null }) {
    return (
        <button
            style={{
                transition:
                    'background 0.1s ease-out 0s, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s'
            }}
            className="leading-[40px] outline-none border border-solid border-[#c1c7d0] rounded-[3px] h-[40px] bg-white hover:bg-[#091e4205] flex items-baseline justify-center px-[10px] gap-x-[6px] font-bold text-[#42526e]"
        >
            <SvgIcon size="24px" className="mx-[2px] select-none self-center">
                {icon}
            </SvgIcon>
            <span className="mx-[2px]">{provider}</span>
        </button>
    );
}

function Authentication() {
    useEffect(() => {
        document.title = 'Log in to continue - Log in with Atlassian account';
    }, []);

    return (
        <div
            style={{
                backgroundSize: '368px, 368px',
                backgroundAttachment: 'fixed, fixed',
                backgroundImage:
                    'url("https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.522/trello-left.4f52d13c.svg"), url("https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.522/trello-right.3ee60d6f.svg")',
                backgroundRepeat: 'no-repeat, no-repeat',
                backgroundPosition: 'left bottom, right bottom'
            }}
            className="w-full h-full bg-white absolute max-[1200px]:![background-size:_calc(50vw-232px),_calc(50vw-232px),_cover] max-[800px]:![background:_white]"
        >
            <div className="min-h-[calc(100%-100px)] flex flex-col justify-center my-[50px] max-[800px]:!m-0 max-[800px]:!justify-start max-[800px]:!h-full">
                <section className="text-[#5e6c84] flex flex-col mx-auto w-[400px] max-[800px]:!w-[320px] p-[32px_40px] max-[800px]:!p-[32px_16px] max-[800px]:!h-full bg-white rounded-[3px] shadow-[0px_0px_10px_rgba(0,0,0,0.1)] max-[800px]:!shadow-none">
                    <div className="flex flex-col items-center text-center mb-[16px]">
                        <SvgLogo height="40px">
                            <TrelloLogo />
                        </SvgLogo>
                        <div className="pt-[24px]">
                            <h5 className="font-semibold text-[16px] leading-[20px] text-[#172b4d]">
                                Log in to continue
                            </h5>
                        </div>
                    </div>
                    <div className="mb-[16px] hidden">
                        <section className="p-[16px] appearance-none border-none rounded-[3px] bg-[#fffae6]">
                            <div className="flex gap-x-[16px]">
                                <div className="my-[-2px] flex">
                                    <SvgIcon color="#ff8b00" fill="#fffae6">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            role="presentation"
                                            className="w-full h-full fill-inherit text-inherit"
                                        >
                                            <g fillRule="evenodd">
                                                <path
                                                    d="M12.938 4.967c-.518-.978-1.36-.974-1.876 0L3.938 18.425c-.518.978-.045 1.771 1.057 1.771h14.01c1.102 0 1.573-.797 1.057-1.771L12.938 4.967z"
                                                    fill="currentColor"
                                                ></path>
                                                <path
                                                    d="M12 15a1 1 0 01-1-1V9a1 1 0 012 0v5a1 1 0 01-1 1m0 3a1 1 0 010-2 1 1 0 010 2"
                                                    fill="inherit"
                                                ></path>
                                            </g>
                                        </svg>
                                    </SvgIcon>
                                </div>
                                <div className="flex flex-col items-stretch gap-x-[8px]">
                                    <span>
                                        Incorrect email address and / or password. If you recently
                                        migrated your Trello account to an Atlassian account, you
                                        will need to use your Atlassian account password.
                                        Alternatively, you can get help{' '}
                                        <a className="text-[#0052cc] no-underline cursor-pointer hover:underline hover:text-[#0065ff]">
                                            logging in
                                        </a>
                                        .
                                    </span>
                                </div>
                            </div>
                        </section>
                    </div>
                    <form onSubmit={event => event.preventDefault()}>
                        <div className="mb-[8px]">
                            <div
                                style={{
                                    transformOrigin: '50% 0px',
                                    transitionProperty:
                                        'visibility, height, margin-top, opacity, transform',
                                    transitionDuration: '0s, 0.2s, 0.2s, 0.2s',
                                    transitionTimingFunction: ' ease-in-out'
                                }}
                                className="mt-[-8px]"
                            >
                                <div className="mt-[8px]">
                                    <div
                                        style={{
                                            transition:
                                                'background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s'
                                            // borderColor: '#de350b'
                                        }}
                                        className="bg-[#fafbfc] border-[#dfe1e6] text-[#091e42] cursor-text rounded-[3px] border-[2px] focus-within:!bg-[#ffffff] focus-within:!border-[#2684ff] hover:bg-[#ebecf0] hover:border-[#dfe1e6] border-solid flex"
                                    >
                                        <input
                                            className="p-[8px_6px] h-[2.57em] bg-transparent w-full border-none outline-none"
                                            placeholder="Enter your email"
                                            type="email"
                                        />
                                    </div>
                                    <div className="mt-[4px] text-[0.857143em] leading-[1.33333] text-[#ae2a19] flex hidden">
                                        <SvgIcon size="16px" fill="white">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                role="presentation"
                                                className="w-full h-full fill-inherit text-inherit"
                                            >
                                                <g fillRule="evenodd">
                                                    <path
                                                        d="M13.416 4.417a2.002 2.002 0 00-2.832 0l-6.168 6.167a2.002 2.002 0 000 2.833l6.168 6.167a2.002 2.002 0 002.832 0l6.168-6.167a2.002 2.002 0 000-2.833l-6.168-6.167z"
                                                        fill="currentColor"
                                                    ></path>
                                                    <path
                                                        d="M12 14a1 1 0 01-1-1V8a1 1 0 012 0v5a1 1 0 01-1 1m0 3a1 1 0 010-2 1 1 0 010 2"
                                                        fill="inherit"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </SvgIcon>
                                        Nhập địa chỉ email
                                    </div>
                                </div>
                                <div
                                    style={{
                                        transition:
                                            'background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s'
                                    }}
                                    className="mt-[8px] cursor-pointer rounded-[5px] h-[39px] outline-none p-[9px_32px_9px_8px] border border-solid border-white hover:border-[#f4f5f7] hover:bg-[#fafbfc] hidden"
                                >
                                    <span className="flex overflow-hidden whitespace-nowrap">
                                        detu124@gmail.com
                                    </span>
                                    <span className="text-[#42526e] h-[24px] w-[24px] mt-[-22px] mr-[-27px] float-right relative">
                                        <span className="text-current fill-white">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                role="presentation"
                                                className="w-full h-full fill-inherit text-inherit"
                                            >
                                                <path
                                                    d="M4.02 19.23a1 1 0 001.18 1.18l3.81-.78-4.21-4.21-.78 3.81zM19.844 6.707l-2.12-2.122A1.997 1.997 0 0016.308 4c-.512 0-1.024.195-1.415.585l-9.757 9.758 4.95 4.95 9.757-9.758a2 2 0 000-2.828z"
                                                    fill="currentColor"
                                                    fillRule="evenodd"
                                                ></path>
                                            </svg>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div
                                style={{
                                    transformOrigin: '50% 0px',
                                    transitionProperty:
                                        'visibility, height, margin-top, opacity, transform',
                                    transitionDuration: '0s, 0.2s, 0.2s, 0.2s',
                                    transitionTimingFunction: ' ease-in-out'
                                }}
                                className="mt-[8px] hidden"
                            >
                                <div className="mt-[8px]">
                                    <div
                                        style={{
                                            transition:
                                                'background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s'
                                        }}
                                        className="bg-[#fafbfc] border-[#dfe1e6] text-[#091e42] cursor-text rounded-[3px] border-[2px] focus-within:!bg-[#ffffff] focus-within:!border-[#2684ff] hover:bg-[#ebecf0] hover:border-[#dfe1e6] border-solid flex"
                                    >
                                        <input
                                            className="p-[8px_6px] h-[2.57em] bg-transparent w-full border-none outline-none mr-[26px]"
                                            placeholder="Enter password"
                                        />
                                    </div>
                                    <span className="text-[#42526e] h-[24px] w-[24px] mt-[-31px] mr-[6px] float-right relative">
                                        <span className="text-current fill-white">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                role="presentation"
                                                className="w-full h-full fill-inherit text-inherit"
                                            >
                                                <g fill="currentColor" fillRule="evenodd">
                                                    <path d="M12 18c-4.536 0-7.999-4.26-7.999-6 0-2.001 3.459-6 8-6 4.376 0 7.998 3.973 7.998 6 0 1.74-3.462 6-7.998 6m0-14C6.48 4 2 8.841 2 12c0 3.086 4.576 8 10 8 5.423 0 10-4.914 10-8 0-3.159-4.48-8-10-8"></path>
                                                    <path d="M11.977 13.984c-1.103 0-2-.897-2-2s.897-2 2-2c1.104 0 2 .897 2 2s-.896 2-2 2m0-6c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.207 0 4-1.794 4-4s-1.793-4-4-4"></path>
                                                </g>
                                            </svg>
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                role="presentation"
                                                className="w-full h-full fill-inherit text-inherit"
                                            >
                                                <g fill="currentColor" fillRule="evenodd">
                                                    <path d="M11.983 15.984a4.005 4.005 0 01-4.002-4c0-2.206 1.795-4 4.002-4a4.005 4.005 0 014.002 4c0 2.206-1.795 4-4.002 4M12 4C6.48 4 2 8.84 2 12c0 3.086 4.577 8 10 8s10-4.914 10-8c0-3.16-4.481-8-10-8"></path>
                                                    <circle cx="12" cy="12" r="2"></circle>
                                                </g>
                                            </svg>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button
                            style={{
                                transition:
                                    'background 0.1s ease-out 0s, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s'
                            }}
                            className="h-[40px] leading-[1] text-white items-baseline border-none rounded-[3px] inline-flex font-medium text-center whitespace-nowrap cursor-pointer px-[10px] align-middle w-full max-w-full justify-center bg-[#0052cc] hover:bg-[#0065ff] hover:![transition-duration:_0s,_0.15s]"
                            type="submit"
                        >
                            <span
                                style={{
                                    opacity: 1,
                                    transition: 'opacity 0.3s ease 0s'
                                }}
                                className="flex items-center justify-center mx-[2px] leading-[40px] flex-1 "
                            >
                                Continue
                            </span>
                        </button>
                    </form>
                    <div className="mt-[24px] flex flex-col gap-y-[16px]">
                        <div className="text-[#5e6c84] font-semibold leading-[16px] text-center cursor-default">
                            Or continue with:
                        </div>
                        <AuthenticationProvider icon={<GoogleLogo />} provider="Google" />
                        <AuthenticationProvider icon={<MicrosoftLogo />} provider="Microsoft" />
                        <AuthenticationProvider icon={<AppleLogo />} provider="Apple" />
                        <AuthenticationProvider icon={<SlackLogo />} provider="Slack" />
                    </div>
                    <ul className="mt-[24px] list-none flex gap-x-[8px] justify-center items-center leading-[20px]">
                        <li>
                            <a className="text-[#0052cc] no-underline cursor-pointer hover:underline hover:text-[#0065ff]">
                                Can&apos;t log in?
                            </a>
                        </li>
                        <span>•</span>
                        <li>
                            <a className="text-[#0052cc] no-underline cursor-pointer hover:underline hover:text-[#0065ff]">
                                Create an account
                            </a>
                        </li>
                    </ul>
                    <div className="pt-[16px] text-[#6b778c] text-[11px] leading-[14px] max-[800px]:mt-auto">
                        <footer className="gap-y-[8px] pt-[24px] border-t border-t-solid border-t-[#c1c7d0] flex flex-col justify-center text-[#172b4d] items-center max-[800px]:leading-[inherit]">
                            <span className="fill-current text-inherit h-[24px] select-none">
                                <svg
                                    viewBox="0 0 190 32"
                                    height={32}
                                    xmlns="http://www.w3.org/2000/svg"
                                    focusable="false"
                                    aria-hidden="true"
                                    className="fill-inherit h-full"
                                >
                                    <defs>
                                        <linearGradient
                                            x1="99.684716%"
                                            y1="15.8138128%"
                                            x2="39.8444399%"
                                            y2="97.4388388%"
                                            id="uid4"
                                        >
                                            <stop stopColor="#344563" offset="0%" />
                                            <stop stopColor="#7A869A" offset="100%" />
                                        </linearGradient>
                                    </defs>
                                    <g stroke="none" strokeWidth={1} fill="#505F79">
                                        <path
                                            fill="url(#uid4)"
                                            d="M6.90502605,15.6123193 C6.76436383,15.4302139 6.53773035,15.3340846 6.30742588,15.35884 C6.0771214,15.3835955 5.876643,15.525635 5.7787929,15.7333781 L0.0719979599,27.0218487 C-0.0337056449,27.2310259 -0.0224063827,27.4794358 0.101860917,27.6783741 C0.226128216,27.8773125 0.445645594,27.9984148 0.68202605,27.9984369 L8.62844459,27.9984369 C8.88847261,28.0044096 9.12761649,27.8581627 9.23847268,27.6253781 C10.9526159,24.1210252 9.91378448,18.7926722 6.90502605,15.6123193 Z"
                                        />
                                        <path
                                            fill="#7A869A"
                                            d="M11.0859556,5.33713587 C8.19309829,9.74089822 7.85921851,15.3267488 10.2073011,20.0371359 L14.0383488,27.6176065 C14.1538739,27.8462194 14.3900332,27.9906411 14.6483769,27.9906653 L22.5933685,27.9906653 C22.829749,27.9906431 23.0492663,27.8695408 23.1735336,27.6706025 C23.2978009,27.4716641 23.3091002,27.2232543 23.2033966,27.014077 C23.2033966,27.014077 12.5147056,5.8619594 12.2460792,5.33290058 C12.1377032,5.11315026 11.9118188,4.97410225 11.6646746,4.97500451 C11.4175304,4.97590676 11.1926893,5.11660025 11.0859556,5.33713587 L11.0859556,5.33713587 Z"
                                        />
                                        <path
                                            d="M104.2774,14.3919316 C104.2774,17.1872257 105.588069,19.4065198 110.714802,20.3862846 C113.773504,21.0215787 114.414212,21.5100493 114.414212,22.5187551 C114.414212,23.4985198 113.772077,24.1327551 111.617715,24.1327551 C109.013896,24.0864379 106.462135,23.403307 104.189999,22.1442846 L104.189999,26.6972257 C105.733976,27.4465198 107.772754,28.2822846 111.559566,28.2822846 C116.919251,28.2822846 119.045788,25.9175787 119.045788,22.4033434 M119.045788,22.4033434 C119.045788,19.0892257 117.268858,17.5327551 112.25878,16.4668728 C109.491535,15.8615787 108.821574,15.2566375 108.821574,14.3919316 C108.821574,13.297814 109.811889,12.835814 111.646968,12.835814 C113.860906,12.835814 116.045591,13.4986375 118.113622,14.4208728 L118.113622,10.0691081 C116.130615,9.17615406 113.970906,8.73311319 111.792518,8.7724022 C106.840589,8.7724022 104.2774,10.9048728 104.2774,14.3919316"
                                            fill="inherit"
                                        />
                                        <polygon
                                            fill="inherit"
                                            points="173.129997 9.07000017 173.129997 28.0038825 177.20791 28.0038825 177.20791 13.5657649 178.926691 17.3983531 184.694132 28.0038825 189.820865 28.0038825 189.820865 9.07000017 185.742952 9.07000017 185.742952 21.2891766 184.198975 17.7442355 179.567399 9.07000017"
                                        />
                                        <rect
                                            fill="inherit"
                                            x="142.740005"
                                            y="9.07000017"
                                            width="4.45677247"
                                            height="18.9338824"
                                        />
                                        <path
                                            d="M137.600792,22.4033434 C137.600792,19.0892257 135.823862,17.5327551 130.813784,16.4668728 C128.046539,15.8615787 127.376579,15.2566375 127.376579,14.3919316 C127.376579,13.297814 128.366893,12.835814 130.201972,12.835814 C132.41591,12.835814 134.600595,13.4986375 136.668626,14.4208728 L136.668626,10.0691081 C134.685619,9.17615406 132.52591,8.73311319 130.347522,8.7724022 C125.395593,8.7724022 122.832404,10.9048728 122.832404,14.3919316 C122.832404,17.1872257 124.143073,19.4065198 129.269806,20.3862846 C132.328508,21.0215787 132.969216,21.5100493 132.969216,22.5187551 C132.969216,23.4985198 132.327081,24.1327551 130.172719,24.1327551 C127.568901,24.0864379 125.017139,23.403307 122.745003,22.1442846 L122.745003,26.6972257 C124.28898,27.4465198 126.327758,28.2822846 130.11457,28.2822846 C135.474256,28.2822846 137.600792,25.9175787 137.600792,22.4033434"
                                            fill="inherit"
                                        />
                                        <polygon
                                            fill="inherit"
                                            points="69.6599979 9.07000017 69.6599979 28.0038825 78.8204081 28.0038825 80.2627142 23.9115296 74.1456665 23.9115296 74.1456665 9.07000017"
                                        />
                                        <polygon
                                            fill="inherit"
                                            points="51.5549984 9.07000017 51.5549984 13.1620002 56.5069282 13.1620002 56.5069282 28.0038825 60.9925967 28.0038825 60.9925967 13.1620002 66.2941332 13.1620002 66.2941332 9.07000017"
                                        />
                                        <path
                                            d="M45.0573091,9.07000017 L39.1785647,9.07000017 L32.5050001,28.0038825 L37.6014102,28.0038825 L38.5474889,24.815059 C40.877531,25.4919503 43.3551322,25.4919503 45.6851743,24.815059 L46.6312529,28.0038825 L51.7287333,28.0038825 L45.0573091,9.07000017 Z M42.1177585,21.4007061 C41.287584,21.4006584 40.4616854,21.2831148 39.6651602,21.0516472 L42.1177585,12.7889413 L44.5703569,21.0544708 C43.7736914,21.2849831 42.9477956,21.4015755 42.1177585,21.4007061 L42.1177585,21.4007061 Z"
                                            fill="inherit"
                                        />
                                        <path
                                            d="M94.6019534,9.07000017 L88.7235658,9.07000017 L82.0500011,28.0038825 L87.1474815,28.0038825 L88.0935601,24.815059 C90.4236023,25.4919503 92.9012034,25.4919503 95.2312455,24.815059 L96.1773242,28.0038825 L101.274805,28.0038825 L94.6019534,9.07000017 Z M91.6627596,21.4007061 C90.8325851,21.4006584 90.0066865,21.2831148 89.2101613,21.0516472 L91.6627596,12.7889413 L94.1153579,21.0544708 C93.3186924,21.2849831 92.4927966,21.4015755 91.6627596,21.4007061 L91.6627596,21.4007061 Z"
                                            fill="inherit"
                                        />
                                        <path
                                            d="M163.256954,9.07000017 L157.378566,9.07000017 L150.705002,28.0038825 L155.802482,28.0038825 L156.748561,24.815059 C159.078603,25.4919503 161.556204,25.4919503 163.886246,24.815059 L164.832325,28.0038825 L169.930162,28.0038825 L163.256954,9.07000017 Z M160.315977,21.4007061 C159.485802,21.4006584 158.659903,21.2831148 157.863378,21.0516472 L160.315977,12.7889413 L162.768575,21.0544708 C161.971909,21.2849831 161.146014,21.4015755 160.315977,21.4007061 L160.315977,21.4007061 Z"
                                            fill="inherit"
                                        />
                                    </g>
                                </svg>
                            </span>
                            <div>
                                One account for Trello, Jira, Confluence and{' '}
                                <a className="text-[#0052cc] no-underline cursor-pointer hover:underline">
                                    more
                                </a>
                            </div>
                        </footer>
                        <ul className="flex items-center justify-center gap-x-[8px] list-none mt-[12px] cursor-pointer">
                            <li>
                                <a className="no-underline hover:underline">Privacy Policy</a>
                            </li>
                            <div>•</div>
                            <li>
                                <a className="no-underline hover:underline">User Notice</a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Authentication;

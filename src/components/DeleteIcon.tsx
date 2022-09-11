import React from 'react'

function DeleteIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 61 60">
            <g filter="url(#filter0_d_78_2716)">
                <rect
                    width="40"
                    height="40"
                    x="9.816"
                    y="9"
                    fill="#8B959C"
                    rx="2"></rect>
                <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    d="M0.75 -0.75L23.981 -0.75"
                    transform="matrix(-.70117 .713 -.70117 -.713 38.34 20)"></path>
                <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    d="M39 38L21.66 20.367"></path>
            </g>
            <defs>
                <filter
                    id="filter0_d_78_2716"
                    width="60"
                    height="60"
                    x="0.816"
                    y="0"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse">
                    <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                    <feOffset dx="1" dy="1"></feOffset>
                    <feGaussianBlur stdDeviation="5"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_78_2716"></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_78_2716"
                        result="shape"></feBlend>
                </filter>
            </defs>
        </svg>
    )
}

export default DeleteIcon

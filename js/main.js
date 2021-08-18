/** @format */

const alignHorizontal = document.querySelector('.alignment__icon--horizontal');
const alignVertical = document.querySelector('.alignment__icon--vertical');
const cardsWrapper = document.querySelector('.cards__wrapper');
const closeModalBtn = document.querySelector('.modal__close');
const modal = document.querySelector('#modal');
const asideMenu = document.querySelector('#aside-menu');
const navBtn = document.querySelector('.nav__menu');
const menuCloser = document.querySelector('#menu-closer');

// Icons
const pcIcon = `<svg id="pc" viewBox="0 0 16 13" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.95833H5.95833V0.998704L13 0V5.95833ZM5.41667 1.08333V5.95833H0V1.80612L5.41667 1.08333ZM5.41667 6.5H0V11.1145L5.41667 11.9167V6.5ZM5.95833 11.912V6.5H13V13L5.95833 11.912Z"  /> </svg>`;
const linuxIcon = `<svg id="linux" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 304.998 304.998" > <path id="linux" d="M274.659,244.888c-8.944-3.663-12.77-8.524-12.4-15.777c0.381-8.466-4.422-14.667-6.703-17.117 c1.378-5.264,5.405-23.474,0.004-39.291c-5.804-16.93-23.524-42.787-41.808-68.204c-7.485-10.438-7.839-21.784-8.248-34.922 c-0.392-12.531-0.834-26.735-7.822-42.525C190.084,9.859,174.838,0,155.851,0c-11.295,0-22.889,3.53-31.811,9.684 c-18.27,12.609-15.855,40.1-14.257,58.291c0.219,2.491,0.425,4.844,0.545,6.853c1.064,17.816,0.096,27.206-1.17,30.06 c-0.819,1.865-4.851,7.173-9.118,12.793c-4.413,5.812-9.416,12.4-13.517,18.539c-4.893,7.387-8.843,18.678-12.663,29.597 c-2.795,7.99-5.435,15.537-8.005,20.047c-4.871,8.676-3.659,16.766-2.647,20.505c-1.844,1.281-4.508,3.803-6.757,8.557 c-2.718,5.8-8.233,8.917-19.701,11.122c-5.27,1.078-8.904,3.294-10.804,6.586c-2.765,4.791-1.259,10.811,0.115,14.925 c2.03,6.048,0.765,9.876-1.535,16.826c-0.53,1.604-1.131,3.42-1.74,5.423c-0.959,3.161-0.613,6.035,1.026,8.542 c4.331,6.621,16.969,8.956,29.979,10.492c7.768,0.922,16.27,4.029,24.493,7.035c8.057,2.944,16.388,5.989,23.961,6.913 c1.151,0.145,2.291,0.218,3.39,0.218c11.434,0,16.6-7.587,18.238-10.704c4.107-0.838,18.272-3.522,32.871-3.882 c14.576-0.416,28.679,2.462,32.674,3.357c1.256,2.404,4.567,7.895,9.845,10.724c2.901,1.586,6.938,2.495,11.073,2.495 c0.001,0,0,0,0.001,0c4.416,0,12.817-1.044,19.466-8.039c6.632-7.028,23.202-16,35.302-22.551c2.7-1.462,5.226-2.83,7.441-4.065 c6.797-3.768,10.506-9.152,10.175-14.771C282.445,250.905,279.356,246.811,274.659,244.888z M124.189,243.535 c-0.846-5.96-8.513-11.871-17.392-18.715c-7.26-5.597-15.489-11.94-17.756-17.312c-4.685-11.082-0.992-30.568,5.447-40.602 c3.182-5.024,5.781-12.643,8.295-20.011c2.714-7.956,5.521-16.182,8.66-19.783c4.971-5.622,9.565-16.561,10.379-25.182 c4.655,4.444,11.876,10.083,18.547,10.083c1.027,0,2.024-0.134,2.977-0.403c4.564-1.318,11.277-5.197,17.769-8.947 c5.597-3.234,12.499-7.222,15.096-7.585c4.453,6.394,30.328,63.655,32.972,82.044c2.092,14.55-0.118,26.578-1.229,31.289 c-0.894-0.122-1.96-0.221-3.08-0.221c-7.207,0-9.115,3.934-9.612,6.283c-1.278,6.103-1.413,25.618-1.427,30.003 c-2.606,3.311-15.785,18.903-34.706,21.706c-7.707,1.12-14.904,1.688-21.39,1.688c-5.544,0-9.082-0.428-10.551-0.651l-9.508-10.879 C121.429,254.489,125.177,250.583,124.189,243.535z M136.254,64.149c-0.297,0.128-0.589,0.265-0.876,0.411 c-0.029-0.644-0.096-1.297-0.199-1.952c-1.038-5.975-5-10.312-9.419-10.312c-0.327,0-0.656,0.025-1.017,0.08 c-2.629,0.438-4.691,2.413-5.821,5.213c0.991-6.144,4.472-10.693,8.602-10.693c4.85,0,8.947,6.536,8.947,14.272 C136.471,62.143,136.4,63.113,136.254,64.149z M173.94,68.756c0.444-1.414,0.684-2.944,0.684-4.532 c0-7.014-4.45-12.509-10.131-12.509c-5.552,0-10.069,5.611-10.069,12.509c0,0.47,0.023,0.941,0.067,1.411 c-0.294-0.113-0.581-0.223-0.861-0.329c-0.639-1.935-0.962-3.954-0.962-6.015c0-8.387,5.36-15.211,11.95-15.211 c6.589,0,11.95,6.824,11.95,15.211C176.568,62.78,175.605,66.11,173.94,68.756z M169.081,85.08 c-0.095,0.424-0.297,0.612-2.531,1.774c-1.128,0.587-2.532,1.318-4.289,2.388l-1.174,0.711c-4.718,2.86-15.765,9.559-18.764,9.952 c-2.037,0.274-3.297-0.516-6.13-2.441c-0.639-0.435-1.319-0.897-2.044-1.362c-5.107-3.351-8.392-7.042-8.763-8.485 c1.665-1.287,5.792-4.508,7.905-6.415c4.289-3.988,8.605-6.668,10.741-6.668c0.113,0,0.215,0.008,0.321,0.028 c2.51,0.443,8.701,2.914,13.223,4.718c2.09,0.834,3.895,1.554,5.165,2.01C166.742,82.664,168.828,84.422,169.081,85.08z M205.028,271.45c2.257-10.181,4.857-24.031,4.436-32.196c-0.097-1.855-0.261-3.874-0.42-5.826 c-0.297-3.65-0.738-9.075-0.283-10.684c0.09-0.042,0.19-0.078,0.301-0.109c0.019,4.668,1.033,13.979,8.479,17.226 c2.219,0.968,4.755,1.458,7.537,1.458c7.459,0,15.735-3.659,19.125-7.049c1.996-1.996,3.675-4.438,4.851-6.372 c0.257,0.753,0.415,1.737,0.332,3.005c-0.443,6.885,2.903,16.019,9.271,19.385l0.927,0.487c2.268,1.19,8.292,4.353,8.389,5.853 c-0.001,0.001-0.051,0.177-0.387,0.489c-1.509,1.379-6.82,4.091-11.956,6.714c-9.111,4.652-19.438,9.925-24.076,14.803 c-6.53,6.872-13.916,11.488-18.376,11.488c-0.537,0-1.026-0.068-1.461-0.206C206.873,288.406,202.886,281.417,205.028,271.45z M39.917,245.477c-0.494-2.312-0.884-4.137-0.465-5.905c0.304-1.31,6.771-2.714,9.533-3.313c3.883-0.843,7.899-1.714,10.525-3.308 c3.551-2.151,5.474-6.118,7.17-9.618c1.228-2.531,2.496-5.148,4.005-6.007c0.085-0.05,0.215-0.108,0.463-0.108 c2.827,0,8.759,5.943,12.177,11.262c0.867,1.341,2.473,4.028,4.331,7.139c5.557,9.298,13.166,22.033,17.14,26.301 c3.581,3.837,9.378,11.214,7.952,17.541c-1.044,4.909-6.602,8.901-7.913,9.784c-0.476,0.108-1.065,0.163-1.758,0.163 c-7.606,0-22.662-6.328-30.751-9.728l-1.197-0.503c-4.517-1.894-11.891-3.087-19.022-4.241c-5.674-0.919-13.444-2.176-14.732-3.312 c-1.044-1.171,0.167-4.978,1.235-8.337c0.769-2.414,1.563-4.91,1.998-7.523C41.225,251.596,40.499,248.203,39.917,245.477z" /> </svg>`;
const macIcon = `<svg id="mac" viewBox="0 0 900 1000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 304.998 304.998"><path d="M702 960c-54.2 52.6-114 44.4-171 19.6-60.6-25.3-116-26.9-180 0-79.7 34.4-122 24.4-170-19.6-271-279-231-704 77-720 74.7 4 127 41.3 171 44.4 65.4-13.3 128-51.4 198-46.4 84.1 6.8 147 40 189 99.7-173 104-132 332 26.9 396-31.8 83.5-72.6 166-141 227zM423 237C414.9 113 515.4 11 631 1c15.9 143-130 250-208 236z"/></svg>`;
const playstationIcon = `<svg id="ps" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 0.149439L6.5 12.0297L9.07955 12.882L9.07955 2.9205C9.07955 2.4511 9.28024 2.13944 9.60212 2.24662C10.023 2.36835 10.1048 2.80075 10.1048 3.26493L10.1048 7.24338C11.7104 8.05381 12.9745 7.24296 12.9745 5.10468C12.9745 2.91966 12.2334 1.94626 10.0527 1.16365C9.19249 0.864976 7.59836 0.360979 6.5 0.149439Z" />
<path d="M9.75 11.1429L13.6492 9.45771C14.0903 9.25915 14.1578 8.9894 13.8008 8.84764C13.4382 8.70325 12.791 8.74457 12.3452 8.93895L9.75 10.0506V8.27688L9.89861 8.21729C9.89861 8.21729 10.6498 7.89415 11.7064 7.75502C12.7609 7.61465 14.0541 7.77328 15.0706 8.2385C16.2156 8.68019 16.3439 9.32446 16.0542 9.77281C15.7603 10.2165 15.0478 10.5375 15.0478 10.5375L9.75 12.8484" />
<path d="M1.18907 11.3388C-0.0278308 10.9682 -0.230758 10.185 0.324385 9.7326C0.836458 9.31949 1.70854 9.0085 1.70854 9.0085L5.31353 7.6032L5.31353 9.20264L2.72172 10.2184C2.26263 10.3979 2.1938 10.6505 2.56358 10.7827C2.93997 10.9202 3.60794 10.8832 4.0673 10.6979L5.31353 10.2067V11.6345C5.23321 11.6492 5.1439 11.6641 5.06238 11.6793C3.81985 11.9048 2.49607 11.8122 1.18907 11.3388Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1271 12.7978C16.0247 12.8989 15.8903 12.9561 15.7455 12.9561C15.6008 12.9561 15.462 12.8989 15.3594 12.7978C15.2582 12.6948 15.2021 12.5603 15.2021 12.4154C15.2021 12.1153 15.4451 11.8727 15.7455 11.8727C15.8903 11.8727 16.0247 11.928 16.1271 12.0314C16.2284 12.1324 16.2855 12.2692 16.2855 12.4154C16.2855 12.5603 16.2284 12.6948 16.1271 12.7978ZM15.2934 12.4154C15.2934 12.292 15.3396 12.1788 15.4239 12.095C15.5104 12.0092 15.6257 11.963 15.7455 11.963C15.8655 11.963 15.9779 12.0092 16.0622 12.095C16.1473 12.1788 16.1932 12.292 16.1932 12.4154C16.1932 12.6627 15.9922 12.8634 15.7455 12.8634C15.6257 12.8634 15.5104 12.8177 15.4239 12.7331C15.3396 12.6477 15.2934 12.5358 15.2934 12.4154ZM15.9927 12.6405C15.9976 12.6544 16.0034 12.6627 16.0118 12.6651L16.0193 12.6694V12.7038H15.9018L15.8996 12.6969L15.8916 12.6761C15.8903 12.6651 15.8887 12.6508 15.8871 12.6267L15.8819 12.5325C15.8805 12.4991 15.8696 12.4796 15.8494 12.4667C15.8345 12.4617 15.8141 12.4579 15.7837 12.4579H15.6205V12.7038H15.5134V12.0997H15.7941C15.8399 12.0997 15.8785 12.1078 15.908 12.1204C15.9672 12.1482 15.9976 12.1984 15.9976 12.269C15.9976 12.3037 15.9889 12.3362 15.9741 12.3601C15.9612 12.377 15.946 12.3924 15.9295 12.4075L15.9339 12.4106C15.9451 12.4185 15.9563 12.4263 15.9628 12.4378C15.9778 12.4543 15.9846 12.482 15.9858 12.5177L15.9885 12.5946C15.9889 12.6143 15.9905 12.6296 15.9927 12.6405ZM15.8661 12.3435C15.8835 12.3323 15.8916 12.31 15.8916 12.276C15.8916 12.2401 15.8792 12.2162 15.8549 12.2042C15.8399 12.1984 15.8214 12.1942 15.7964 12.1942H15.6205V12.3639H15.7867C15.8198 12.3639 15.846 12.3571 15.8661 12.3435Z" />
</svg>`;
const xboxIcon = `<svg id="xbox" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 0C7.75357 0 8.79048 0.40056 9.73452 1.07423C9.75 1.07423 9.75 1.09244 9.75 1.11064C9.75 1.12885 9.73452 1.12885 9.71905 1.12885C8.5119 0.819328 6.68571 2.03922 6.51548 2.16667H6.5H6.48452C6.31429 2.03922 4.4881 0.819328 3.28095 1.12885C3.26548 1.12885 3.25 1.12885 3.25 1.11064C3.25 1.09244 3.25 1.07423 3.26548 1.07423C4.20952 0.40056 5.24643 0 6.5 0ZM10.6537 11.4392C11.6287 10.4302 8.40504 6.86712 6.5023 5.41667C6.5023 5.41667 6.48658 5.41667 6.48658 5.43243C4.59957 6.86712 1.3602 10.4302 2.35088 11.4392C3.45164 12.4167 4.91407 13 6.5023 13C8.09054 13 9.53724 12.4167 10.6537 11.4392ZM1.78082 2.19751C1.7734 2.19751 1.76969 2.20158 1.76598 2.20566C1.76227 2.20973 1.75856 2.2138 1.75114 2.2138C0.667808 3.40327 0 5.04896 0 6.8576C0 8.34035 0.460046 9.72534 1.21689 10.817C1.21689 10.8333 1.23174 10.8333 1.24658 10.8333C1.26142 10.8333 1.26142 10.817 1.24658 10.8007C0.78653 9.25282 3.11644 5.52149 4.31849 3.95726L4.33333 3.94097C4.33333 3.93257 4.33333 3.9285 4.3313 3.92653C4.32939 3.92467 4.32568 3.92467 4.31849 3.92467C2.49315 1.93681 1.8847 2.14863 1.78082 2.19751ZM8.66667 3.93424L8.68151 3.91793C10.5068 1.94443 11.1153 2.15646 11.2043 2.18908C11.2105 2.18908 11.2141 2.18908 11.2173 2.19025C11.2217 2.1919 11.2253 2.19586 11.234 2.20539C12.3322 3.39602 13 5.04332 13 6.85372C13 8.33792 12.54 9.72426 11.7831 10.817C11.7831 10.8333 11.7683 10.8333 11.7534 10.8333V10.8007C12.1986 9.25127 9.88356 5.5163 8.68151 3.95055C8.66667 3.95055 8.66667 3.93424 8.66667 3.93424Z"  /> </svg>`;
const nintendoIcon = `<svg id="nintendo" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.67443 13H7.67506C7.62406 13 7.58325 12.9591 7.58325 12.908V0.081761C7.58325 0.0408805 7.61385 0 7.66486 0H9.67443C11.5106 0 12.9999 1.49214 12.9999 3.33176V9.66824C12.9999 11.5079 11.5106 13 9.67443 13ZM11.4596 7.15409C11.4596 6.42846 10.8679 5.83569 10.1437 5.83569C9.41941 5.83569 8.83796 6.42846 8.82776 7.15409C8.82776 7.87972 9.41941 8.47248 10.1437 8.47248C10.8679 8.47248 11.4596 7.87972 11.4596 7.15409Z"  /> <path d="M2.16675 4.33333C2.16675 4.92917 2.65425 5.41667 3.25008 5.41667C3.84591 5.41667 4.33341 4.92917 4.33341 4.33333C4.33341 3.7375 3.84591 3.25 3.25008 3.25C2.64522 3.25 2.16675 3.72847 2.16675 4.33333Z"  /> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.45677 0H6.40457C6.45759 0 6.5 0.0408805 6.5 0.0919811V12.908C6.5 12.9591 6.45759 13 6.40457 13H3.45677C1.54812 13 0 11.5079 0 9.66824V3.33176C0 1.49214 1.54812 0 3.45677 0ZM3.45677 11.9575H5.41843V1.04245H3.45677C2.82055 1.04245 2.22675 1.28774 1.7814 1.71698C1.32545 2.14623 1.08157 2.71855 1.08157 3.33176V9.66824C1.08157 10.2814 1.33605 10.8538 1.7814 11.283C2.22675 11.7225 2.82055 11.9575 3.45677 11.9575Z"  /> </svg>`;
const iosIcon = `<svg id="ios" viewBox="0 0 900 1000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 304.998 304.998"><path d="M702 960c-54.2 52.6-114 44.4-171 19.6-60.6-25.3-116-26.9-180 0-79.7 34.4-122 24.4-170-19.6-271-279-231-704 77-720 74.7 4 127 41.3 171 44.4 65.4-13.3 128-51.4 198-46.4 84.1 6.8 147 40 189 99.7-173 104-132 332 26.9 396-31.8 83.5-72.6 166-141 227zM423 237C414.9 113 515.4 11 631 1c15.9 143-130 250-208 236z"/></svg>`;
const androidIcon = `<svg id="android" viewBox="0 0 45 50" xmlns="http://www.w3.org/2000/svg" ><path d="M 16.28125 0.03125 C 16.152344 0.0546875 16.019531 0.078125 15.90625 0.15625 C 15.449219 0.464844 15.347656 1.105469 15.65625 1.5625 L 17.8125 4.78125 C 14.480469 6.546875 11.996094 9.480469 11.1875 13 L 38.8125 13 C 38.003906 9.480469 35.519531 6.546875 32.1875 4.78125 L 34.34375 1.5625 C 34.652344 1.105469 34.550781 0.464844 34.09375 0.15625 C 33.632813 -0.152344 32.996094 -0.0195313 32.6875 0.4375 L 30.3125 3.9375 C 28.664063 3.335938 26.875 3 25 3 C 23.125 3 21.335938 3.335938 19.6875 3.9375 L 17.3125 0.4375 C 17.082031 0.09375 16.664063 -0.0429688 16.28125 0.03125 Z M 19.5 8 C 20.328125 8 21 8.671875 21 9.5 C 21 10.332031 20.328125 11 19.5 11 C 18.667969 11 18 10.332031 18 9.5 C 18 8.671875 18.667969 8 19.5 8 Z M 30.5 8 C 31.332031 8 32 8.671875 32 9.5 C 32 10.332031 31.332031 11 30.5 11 C 29.671875 11 29 10.332031 29 9.5 C 29 8.671875 29.671875 8 30.5 8 Z M 8 15 C 6.34375 15 5 16.34375 5 18 L 5 32 C 5 33.65625 6.34375 35 8 35 C 8.351563 35 8.6875 34.925781 9 34.8125 L 9 15.1875 C 8.6875 15.074219 8.351563 15 8 15 Z M 11 15 L 11 37 C 11 38.652344 12.347656 40 14 40 L 36 40 C 37.652344 40 39 38.652344 39 37 L 39 15 Z M 42 15 C 41.648438 15 41.3125 15.074219 41 15.1875 L 41 34.8125 C 41.3125 34.921875 41.648438 35 42 35 C 43.65625 35 45 33.65625 45 32 L 45 18 C 45 16.34375 43.65625 15 42 15 Z M 15 42 L 15 46 C 15 48.207031 16.792969 50 19 50 C 21.207031 50 23 48.207031 23 46 L 23 42 Z M 27 42 L 27 46 C 27 48.207031 28.792969 50 31 50 C 33.207031 50 35 48.207031 35 46 L 35 42 Z"/></svg>`;

eventListeners();
function eventListeners() {
	alignHorizontal.addEventListener('click', alignHorizontalFn);
	alignVertical.addEventListener('click', alignVerticalFn);
	navBtn.addEventListener('click', navLuncher);
	menuCloser.addEventListener('click', navCloser);
	// modal.addEventListener('click', closeModalFn);
	document.addEventListener('keydown', escKeyboard);
}

const tabletView = window.innerWidth <= '767px';
if (tabletView) {
	asideMenu.classList.add('aside--hidden');
	while (asideMenu.classList.contains('aside--show')) {
		asideMenu.classList.remove('aside--show');
	}
}

function navLuncher(e) {
	if (
		e.target.classList.contains('nav__menu') ||
		e.target.classList.contains('nav__menu--icon') ||
		e.target.classList.contains('nav__menu--path')
	) {
		asideMenu.classList.add('aside--show');
		asideMenu.classList.remove('aside--hidden');
		menuCloser.classList.add('menu__closer');
	}
}

function navCloser(e) {
	asideMenu.classList.remove('aside--show');
	asideMenu.classList.add('aside--hidden');
	e.target.classList.add('menu__closer--hidden');
	e.target.classList.remove('menu__closer');
}

const formatDate = function (date) {
	let newDate = new Date(date);
	return newDate
		.toLocaleString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric',
		})
		.replace(',', '');
};

fetchAPI();
async function fetchAPI() {
	const API_KEY = '7a45335865234c029dcee2ab6fd2fd49';
	const url = `https://api.rawg.io/api/games?key=${API_KEY}`;
	try {
		const req = await fetch(url, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'User-Agent': 'Nicolas Oten',
			},
		});
		const games = await req.json();
		allGames(games.results);
		getGameDetails(games.results);
	} catch (error) {
		console.log(error);
	}
}

async function getGameDetails(games) {
	for (let i = 0; i < games.length; i++) {
		const gameId = games[i].id;
		// const gamePics = games.results[i].short_screenshots;

		const gameDetails = await fetchGameDesc(gameId);

		listOfGames.push(gameDetails);
	}
	addDescription();
}

let listOfGames = [];

// Get game's screenshots and description to complete the card and modal
async function fetchGameDesc(id) {
	const API_KEY = '7a45335865234c029dcee2ab6fd2fd49';
	const url = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`;
	try {
		const req = await fetch(url, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'User-Agent': 'Nicolas Oten',
			},
		});
		const data = await req.json();
		// console.log(data.description);
		return data;
	} catch (error) {
		console.log(error);
	}
}

// create each game's card
function allGames(games) {
	let newGame = '';
	games.forEach((game, index) => {
		const {
			id,
			background_image,
			name,
			parent_platforms,
			released,
			rating,
			genres,
		} = game;

		newGame += `
		<div class="card" id=${id}>
		<div class="card__img card__img--format" style="background-image: url(${
			background_image || '../img/placeholder.jpg'
		});"></div>
		<div class="card__info card__info--format">
			<h3 class="header bold open-modal">${name}</h3>
			<div class="consoles">
			<ul>`;
		for (let i = 0; i < parent_platforms.length; i++) {
			parent_platforms[i].platform.slug;
			// newGame += `<li>${platform}</li>`;
			if (parent_platforms[i].platform.slug === 'playstation') {
				newGame += `<li><div class="console__icon">${playstationIcon}</div></li>`;
			}

			if (parent_platforms[i].platform.slug === 'xbox360') {
				newGame += `<li><div class="console__icon">${xboxIcon}</div></li>`;
			}

			if (parent_platforms[i].platform.slug === 'pc') {
				newGame += `<li><div class="console__icon">${pcIcon}</div></li>`;
			}

			if (parent_platforms[i].platform.slug === 'nintendo') {
				newGame += `<li><div class="console__icon">${nintendoIcon}</div></li>`;
			}

			if (parent_platforms[i].platform.slug === 'ios') {
				newGame += `<li><div class="console__icon">${iosIcon}</div></li>`;
			}

			if (parent_platforms[i].platform.slug === 'mac') {
				newGame += `<li><div class="console__icon">${macIcon}</div></li>`;
			}
			if (parent_platforms[i].platform.slug === 'linux') {
				newGame += `<li><div class="console__icon">${linuxIcon}</div></li>`;
			}
			if (parent_platforms[i].platform.slug === 'android') {
				newGame += `<li><div class="console__icon">${androidIcon}</div></li>`;
			}
		}
		newGame += `</ul>
			</div>
			<div class="release--card">
				<p>Release Date</p>
				<p>${formatDate(released)}</p>
			</div>
			<p class="rank bold">#${index + 1}</p>
			<div class="genre--card">
				<p>Genres</p><p>`;
		for (let i = 0; i < genres.length; i++) {
			let genre = genres[i];
			newGame += `${genre.name}`;
			if (i < genres.length - 1) {
				newGame += `, `;
			}
		}
		newGame += `</p></div>
			<div class="gift__container">
				<button class="gift bold">+<img src="./img/gift.svg" alt=""></button>
			</div>
			<div class="card__description--format card__description--hidden" id="card__description--${id}"></div>
		</div>
		
	</div>
		`;
	});
	cardsWrapper.innerHTML += newGame;
}

function addDescription() {
	for (let i = 0; i < listOfGames.length; i++) {
		const newGameDescription = listOfGames[i].description;
		document.getElementById(
			`card__description--${listOfGames[i].id}`
		).innerHTML = newGameDescription;
	}
}

// function addGameDesc(id) {
// 	let description = '';
// 	for (let i = 0; i < cardsDetails.length; i++) {
// 		let game = cardsDetails[i];
// 		if (game.id === id) {
// 			description;
// 		}
// 	}
// 	document.querySelector(`#game__description--${id}`).innerHTML = description;
// }

// function showDescription() {
// 	console.log('game description');
// }

// Open modal on game name (card)
document.addEventListener('click', openModalFn);
function openModalFn(e) {
	if (e.target.classList.contains('open-modal')) {
		document.querySelector('#modal').classList.remove('modal--hidden');
		disableScroll();
	}
}

document.addEventListener('click', closeModalFn);
function closeModalFn(e) {
	if (
		e.target.classList.contains('modal') ||
		e.target.classList.contains('modal__close') ||
		e.target.classList.contains('modal__close--path')
	) {
		document.querySelector('#modal').classList.add('modal--hidden');
		enableScroll();
	}
}

function escKeyboard(e) {
	if (
		(e.keyCode = 'Escape') &&
		!document.querySelector('#modal').classList.contains('modal--hidden')
	) {
		document.querySelector('#modal').classList.add('modal--hidden');
		enableScroll();
	}
}

// Disable scroll Y
function disableScroll() {
	// Get the current page scroll position
	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	(scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
		// if any scroll is attempted, set this to the previous value
		(window.onscroll = function () {
			window.scrollTo(scrollLeft, scrollTop);
		});
}

// Enable scroll Y
function enableScroll() {
	window.onscroll = function () {};
}

// Change card info on vertical/horizontal display
document.querySelectorAll('.card__info--format');
// Change card image on vertical/horizontal display
document.querySelectorAll('.card__img--format');

// Horizontal display
function alignHorizontalFn(e) {
	while (e.target.parentElement.classList.contains('alignment__icon--offset')) {
		e.target.parentElement.classList.remove('alignment__icon--offset');
		alignVertical.classList.add('alignment__icon--offset');
	}

	while (cardsWrapper.classList.contains('cards__wrapper--vertical')) {
		cardsWrapper.classList.remove('cards__wrapper--vertical');
		cardsWrapper.classList.add('cards__wrapper');
	}

	document
		.querySelector('.card__info--format')
		.classList.replace('card__info--vertical', 'card__info');

	document
		.querySelector('.card__img--format')
		.classList.replace('card__img--vertical', 'card__img');

	let cardImg = document.querySelectorAll('.card__img--format');
	for (let i = 0; i < cardImg.length; i++) {
		const eachCardImage = cardImg[i];
		eachCardImage.classList.replace('card__img--vertical', 'card__img');
	}

	let cardInfo = document.querySelectorAll('.card__info--format');
	for (let i = 0; i < cardInfo.length; i++) {
		const eachCardInfo = cardInfo[i];
		eachCardInfo.classList.replace('card__info--vertical', 'card__info');
	}

	let cardDescription = document.querySelectorAll('.card__description--format');
	for (let i = 0; i < cardDescription.length; i++) {
		const eachcardDescription = cardDescription[i];
		eachcardDescription.classList.add('card__description--hidden');
	}
}
// Vertical display
function alignVerticalFn() {
	while (alignVertical.classList.contains('alignment__icon--offset')) {
		alignVertical.classList.remove('alignment__icon--offset');
		alignHorizontal.classList.add('alignment__icon--offset');
	}

	while (cardsWrapper.classList.contains('cards__wrapper')) {
		cardsWrapper.classList.remove('cards__wrapper');
		cardsWrapper.classList.add('cards__wrapper--vertical');
	}

	let cardImg = document.querySelectorAll('.card__img--format');
	for (let i = 0; i < cardImg.length; i++) {
		const eachCardImage = cardImg[i];
		eachCardImage.classList.replace('card__img', 'card__img--vertical');
	}

	let cardInfo = document.querySelectorAll('.card__info--format');
	for (let i = 0; i < cardInfo.length; i++) {
		const eachCardInfo = cardInfo[i];
		eachCardInfo.classList.replace('card__info', 'card__info--vertical');
	}

	let cardDescription = document.querySelectorAll('.card__description--format');
	for (let i = 0; i < cardDescription.length; i++) {
		const eachcardDescription = cardDescription[i];
		eachcardDescription.classList.remove('card__description--hidden');
	}
}

// Modal
function makeModal(id) {
	var modalInfo;
	let i = 0;
	let modalFlag = false;
	while (i < listOfGames.length && !modalFlag) {
		const modal = listOfGames[i];
		if (modal.id === id) {
			modalInfo = listOfGames[i];
			modalFlag = true;
		}
		i++;
	}

	let newModal = '';
	newModal += ``;
}

import React from 'react';
import { useState } from 'react';
import Link from "react-router-dom";

function Register(props)
{
    return (
    //reuse component from login container
      <div id="loginContainer">
        <div id="loginComponentsContainer">
          <div style={{textAlign:"center", fontSize: "2em", fontWeight: "bold"}}>Register</div>
          <RegisterForm />
        </div>
        <SVGDecoration />
      </div>
    )
}

//RegisterForm is a modifield Login Form
class RegisterForm extends React.Component
{
    state = {
        username: '',
        email: '',
        password: '',
        passwordConf: '',
    }
    onSubmit = (e) =>
    {
        e.preventDefault();
        console.log("submit");

    }
    onChange = (e) =>
    {
        this.setState({[e.target.name]: e.target.value})
    }
    render()
    {
        const {username, email, password, passwordConf} = this.state;
        return(
            <form style={{padding: "10px"}} onSubmit={this.onSubmit}>

                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" value={this.onChange} required />

                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" value={this.onChange} required />

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" value={this.onChange} required />

                <label for="psw"><b>Type your password again</b></label>
                <input type="password" placeholder="Enter Password" name="pswc" value={this.onChange} required />

                <div style={{width:"100%", textAlign: "center"}}><button type="submit">Sign up</button></div>
            </form>
        )
    }
}

function SVGDecoration(props)
{
  return (
    <svg width="806" height="439" viewBox="0 0 806 439" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position: "fixed", zIndex: "-1000", right: "30px", bottom: "-10px"}}>
    <g id="undraw_Master_plan_re_jvit 1" clip-path="url(#clip0)">
    <path id="Vector" d="M620.042 237.324C605.071 237.324 590.436 232.896 577.987 224.601C565.539 216.306 555.837 204.516 550.107 190.721C544.378 176.927 542.879 161.748 545.8 147.104C548.721 132.46 555.93 119.009 566.516 108.451C577.103 97.8934 590.591 90.7035 605.275 87.7907C619.958 84.8778 635.179 86.3728 649.01 92.0866C662.842 97.8004 674.665 107.476 682.982 119.891C691.3 132.305 695.74 146.901 695.74 161.832C695.717 181.847 687.734 201.035 673.543 215.188C659.352 229.34 640.112 237.301 620.042 237.324Z" fill="#054A91"/>
    <path id="Vector_2" d="M328.331 46.753C335.469 46.753 341.255 40.9825 341.255 33.8642C341.255 26.7459 335.469 20.9753 328.331 20.9753C321.193 20.9753 315.407 26.7459 315.407 33.8642C315.407 40.9825 321.193 46.753 328.331 46.753Z" fill="#E6E6E6"/>
    <path id="Vector_3" d="M759.436 280.593C762.495 280.593 764.975 278.12 764.975 275.07C764.975 272.019 762.495 269.546 759.436 269.546C756.377 269.546 753.897 272.019 753.897 275.07C753.897 278.12 756.377 280.593 759.436 280.593Z" fill="#054A91"/>
    <path id="Vector_4" d="M764.975 46.753C768.034 46.753 770.514 44.2799 770.514 41.2292C770.514 38.1785 768.034 35.7054 764.975 35.7054C761.916 35.7054 759.436 38.1785 759.436 41.2292C759.436 44.2799 761.916 46.753 764.975 46.753Z" fill="#81A4CD"/>
    <path id="Vector_5" d="M681.893 384.625C684.952 384.625 687.431 382.152 687.431 379.101C687.431 376.05 684.952 373.577 681.893 373.577C678.834 373.577 676.354 376.05 676.354 379.101C676.354 382.152 678.834 384.625 681.893 384.625Z" fill="#81A4CD"/>
    <path id="Vector_6" d="M521.267 41.2292C524.326 41.2292 526.806 38.7561 526.806 35.7054C526.806 32.6547 524.326 30.1817 521.267 30.1817C518.208 30.1817 515.728 32.6547 515.728 35.7054C515.728 38.7561 518.208 41.2292 521.267 41.2292Z" fill="#054A91"/>
    <path id="Vector_7" d="M607.119 139.737C604.38 139.737 601.703 138.927 599.426 137.409C597.148 135.892 595.374 133.735 594.326 131.212C593.277 128.689 593.003 125.912 593.538 123.233C594.072 120.554 595.391 118.094 597.327 116.163C599.264 114.231 601.731 112.916 604.417 112.383C607.103 111.85 609.887 112.124 612.418 113.169C614.948 114.214 617.11 115.984 618.632 118.255C620.153 120.526 620.966 123.196 620.966 125.927C620.961 129.589 619.501 133.099 616.905 135.688C614.309 138.276 610.79 139.733 607.119 139.737ZM607.119 113.959C604.745 113.959 602.425 114.661 600.451 115.976C598.478 117.291 596.94 119.16 596.031 121.347C595.123 123.534 594.885 125.941 595.348 128.262C595.811 130.584 596.954 132.716 598.633 134.39C600.311 136.064 602.449 137.204 604.777 137.666C607.105 138.127 609.518 137.89 611.711 136.984C613.904 136.079 615.778 134.545 617.097 132.576C618.415 130.608 619.119 128.294 619.119 125.927C619.119 122.753 617.855 119.709 615.604 117.464C613.354 115.22 610.301 113.959 607.119 113.959Z" fill="#CCCCCC"/>
    <path id="Vector_8" d="M581.271 174.721C579.262 174.721 577.299 174.127 575.629 173.014C573.959 171.901 572.658 170.32 571.889 168.469C571.121 166.619 570.92 164.583 571.311 162.618C571.703 160.654 572.67 158.849 574.09 157.433C575.511 156.017 577.32 155.052 579.29 154.661C581.259 154.271 583.301 154.471 585.157 155.238C587.012 156.004 588.598 157.302 589.714 158.968C590.83 160.633 591.425 162.591 591.425 164.594C591.422 167.279 590.351 169.853 588.448 171.751C586.544 173.65 583.963 174.718 581.271 174.721ZM581.271 156.308C579.628 156.308 578.021 156.794 576.655 157.704C575.289 158.615 574.224 159.909 573.595 161.423C572.966 162.937 572.802 164.603 573.122 166.21C573.443 167.818 574.234 169.294 575.396 170.453C576.558 171.611 578.038 172.401 579.65 172.72C581.262 173.04 582.932 172.876 584.45 172.249C585.968 171.622 587.266 170.56 588.179 169.197C589.092 167.834 589.579 166.233 589.579 164.594C589.579 162.396 588.704 160.289 587.146 158.735C585.587 157.181 583.474 156.308 581.271 156.308Z" fill="#CCCCCC"/>
    <path id="Vector_9" d="M638.505 223.514C636.497 223.514 634.533 222.92 632.864 221.807C631.194 220.695 629.892 219.113 629.124 217.263C628.355 215.412 628.154 213.376 628.546 211.412C628.938 209.447 629.905 207.643 631.325 206.226C632.745 204.81 634.554 203.846 636.524 203.455C638.494 203.064 640.536 203.265 642.391 204.031C644.247 204.798 645.832 206.096 646.948 207.761C648.064 209.426 648.66 211.384 648.66 213.387C648.657 216.072 647.586 218.646 645.682 220.545C643.778 222.443 641.197 223.511 638.505 223.514ZM638.505 205.102C636.862 205.102 635.256 205.587 633.889 206.498C632.523 207.408 631.458 208.702 630.829 210.216C630.2 211.73 630.036 213.396 630.356 215.004C630.677 216.611 631.468 218.087 632.63 219.246C633.792 220.405 635.273 221.194 636.884 221.514C638.496 221.833 640.166 221.669 641.685 221.042C643.203 220.415 644.5 219.353 645.413 217.991C646.326 216.628 646.813 215.026 646.813 213.387C646.811 211.191 645.935 209.084 644.377 207.531C642.82 205.978 640.708 205.104 638.505 205.102Z" fill="#CCCCCC"/>
    <path id="Vector_10" d="M620.042 192.213C556.89 192.213 507.42 178.868 507.42 161.832C507.42 151.905 522.102 143.375 548.763 137.812L549.142 139.615C523.8 144.902 509.266 153 509.266 161.832C509.266 177.302 559.995 190.371 620.042 190.371C680.09 190.371 730.819 177.302 730.819 161.832C730.819 152.983 716.235 144.875 690.808 139.587L691.184 137.784C717.934 143.347 732.665 151.887 732.665 161.832C732.665 178.868 683.195 192.213 620.042 192.213Z" fill="#CCCCCC"/>
    <path id="Vector_11" d="M280.172 484.252C274.626 484.252 269.024 484.212 263.525 484.132L263.65 482.293C271.546 482.406 279.604 482.438 287.538 482.387L287.592 484.229C285.123 484.244 282.649 484.252 280.172 484.252ZM311.646 483.825L311.412 481.987C319.32 481.772 327.329 481.47 335.218 481.09L335.635 482.921C327.687 483.304 319.617 483.609 311.646 483.825ZM239.492 483.538C231.518 483.257 223.459 482.888 215.54 482.44L216.028 480.614C223.887 481.057 231.883 481.424 239.797 481.702L239.492 483.538ZM359.508 481.514L358.909 479.694C366.766 479.145 374.684 478.507 382.435 477.798L383.214 479.603C375.402 480.318 367.426 480.961 359.508 481.514H359.508ZM191.725 480.84C183.847 480.225 175.895 479.518 168.091 478.738L168.939 476.938C176.684 477.713 184.574 478.414 192.393 479.024L191.725 480.84ZM406.71 477.193L405.749 475.405C413.462 474.527 421.218 473.556 428.802 472.52L429.938 474.286C422.296 475.33 414.481 476.308 406.71 477.193H406.71ZM144.694 476.137C136.966 475.19 129.19 474.149 121.581 473.041L122.785 471.286C130.337 472.385 138.054 473.418 145.721 474.357L144.694 476.137ZM452.85 470.888L451.538 469.15C459.022 467.951 466.55 466.656 473.915 465.298L475.399 467.008C467.979 468.376 460.393 469.681 452.85 470.888H452.85ZM98.7432 469.446C91.2383 468.176 83.6866 466.805 76.2998 465.372L77.8517 463.674C85.1819 465.097 92.6751 466.457 100.123 467.718L98.7432 469.446ZM497.485 462.663L495.83 460.987C503.017 459.483 510.242 457.877 517.303 456.215L519.122 457.855C512.007 459.53 504.727 461.147 497.485 462.663ZM54.2947 460.827C47.0806 459.244 39.8393 457.56 32.7746 455.821L34.6584 454.198C41.6704 455.923 48.8551 457.594 56.0145 459.166L54.2947 460.827ZM540.26 452.593L538.28 450.994C545.173 449.183 552.054 447.278 558.729 445.334L560.864 446.889C554.139 448.849 547.207 450.769 540.26 452.593V452.593ZM11.7825 450.367C4.92081 448.487 -1.95061 446.504 -8.63951 444.475L-6.43948 442.938C0.197693 444.952 7.0164 446.919 13.8264 448.784L11.7825 450.367ZM580.885 440.756L578.597 439.247C585.088 437.159 591.565 434.971 597.849 432.747L600.285 434.207C593.954 436.448 587.427 438.652 580.885 440.756L580.885 440.756ZM-28.4494 438.163C-34.902 436.004 -41.348 433.743 -47.6095 431.441L-45.1148 430.002C-38.9012 432.287 -32.5042 434.531 -26.1012 436.672L-28.4494 438.163ZM619.019 427.257L616.443 425.85C622.492 423.499 628.513 421.049 634.34 418.567L637.053 419.919C631.183 422.42 625.116 424.888 619.019 427.257V427.257ZM-66.0801 424.325C-72.0896 421.901 -78.0602 419.38 -83.8249 416.831L-81.0568 415.502C-75.3351 418.032 -69.4105 420.534 -63.4468 422.94L-66.0801 424.325ZM654.347 412.208L651.501 410.915C657.078 408.313 662.594 405.619 667.894 402.91L670.866 404.142C665.524 406.872 659.967 409.586 654.347 412.208H654.347ZM-100.806 408.975C-106.32 406.305 -111.765 403.545 -116.991 400.772L-113.971 399.566C-108.786 402.318 -103.382 405.056 -97.9093 407.706L-100.806 408.975ZM686.57 395.737L683.482 394.568C688.52 391.744 693.481 388.83 698.23 385.905L701.432 387.008C696.647 389.955 691.647 392.892 686.57 395.737H686.57ZM-132.345 392.241C-137.297 389.36 -142.172 386.385 -146.837 383.399L-143.593 382.324C-138.963 385.286 -134.125 388.238 -129.21 391.099L-132.345 392.241ZM715.413 377.974L712.106 376.94C716.564 373.917 720.931 370.805 725.083 367.69L728.492 368.654C724.304 371.792 719.904 374.928 715.413 377.974H715.413ZM-160.433 374.265C-164.789 371.189 -169.053 368.024 -173.106 364.856L-169.663 363.921C-165.64 367.065 -161.408 370.206 -157.085 373.258L-160.433 374.265ZM740.63 359.064L737.132 358.174C740.97 354.975 744.698 351.69 748.218 348.41L751.802 349.226C748.257 352.531 744.497 355.841 740.63 359.064V359.064ZM-184.83 355.193C-188.558 351.947 -192.174 348.617 -195.575 345.296L-191.96 344.51C-188.584 347.806 -184.997 351.111 -181.296 354.332L-184.83 355.193ZM761.98 339.159L758.318 338.42C761.504 335.069 764.563 331.638 767.411 328.221L771.143 328.881C768.274 332.324 765.19 335.782 761.98 339.159V339.159ZM-205.321 335.186C-208.386 331.799 -211.321 328.333 -214.044 324.884L-210.286 324.255C-207.585 327.677 -204.672 331.116 -201.632 334.478L-205.321 335.186ZM779.268 318.416L775.473 317.837C777.968 314.375 780.322 310.836 782.469 307.318L786.319 307.816C784.154 311.361 781.781 314.928 779.268 318.416V318.416ZM-221.745 314.381C-224.124 310.872 -226.359 307.288 -228.388 303.726L-224.521 303.258C-222.508 306.793 -220.289 310.351 -217.929 313.833L-221.745 314.381ZM792.298 297.078L788.404 296.661C790.194 293.112 791.83 289.488 793.268 285.891L797.2 286.224C795.752 289.85 794.102 293.501 792.299 297.078H792.298ZM-233.956 292.941C-235.623 289.344 -237.132 285.681 -238.44 282.049L-234.496 281.747C-233.197 285.352 -231.7 288.987 -230.046 292.556L-233.956 292.941ZM801.01 275.28L797.048 275.03C798.123 271.424 799.031 267.746 799.747 264.1L803.73 264.265C803.008 267.941 802.092 271.646 801.011 275.28H801.01ZM-241.835 271.076C-242.777 267.431 -243.552 263.719 -244.136 260.042L-240.148 259.908C-239.569 263.557 -238.8 267.24 -237.864 270.858L-241.835 271.076ZM805.358 253.207L801.364 253.124C801.719 249.476 801.901 245.775 801.901 242.126H805.899C805.899 245.803 805.717 249.532 805.358 253.207H805.358ZM-245.348 248.971C-245.484 246.713 -245.553 244.41 -245.554 242.126C-245.554 240.709 -245.528 239.295 -245.475 237.883L-241.477 237.916C-241.53 239.317 -241.557 240.72 -241.557 242.126C-241.556 244.393 -241.486 246.679 -241.352 248.92L-245.348 248.971ZM801.871 239.557C801.789 235.907 801.524 232.207 801.085 228.559L805.075 228.457C805.518 232.132 805.785 235.86 805.869 239.538L801.871 239.557ZM-240.528 226.923L-244.519 226.808C-244.02 223.129 -243.331 219.414 -242.473 215.764L-238.498 215.962C-239.35 219.585 -240.033 223.272 -240.528 226.923ZM799.214 217.593C798.416 213.963 797.422 210.29 796.263 206.676L800.218 206.407C801.385 210.049 802.387 213.75 803.193 217.407L799.214 217.593ZM-235.386 205.056L-239.337 204.774C-238.112 201.132 -236.689 197.461 -235.107 193.861L-231.189 194.226C-232.758 197.798 -234.17 201.442 -235.386 205.056ZM792.228 195.835C790.703 192.243 788.984 188.628 787.114 185.089L790.998 184.654C792.882 188.22 794.615 191.863 796.152 195.482L792.228 195.835ZM-225.916 183.497L-229.794 183.05C-227.852 179.484 -225.702 175.888 -223.403 172.362L-219.575 172.891C-221.856 176.39 -223.989 179.959 -225.916 183.497ZM780.929 174.463C778.7 170.957 776.264 167.43 773.689 163.98L777.468 163.381C780.064 166.858 782.52 170.413 784.767 173.945L780.929 174.463ZM-212.153 162.402L-215.925 161.792C-213.268 158.311 -210.4 154.814 -207.399 151.397L-203.692 152.088C-206.67 155.478 -209.517 158.949 -212.153 162.402ZM765.404 153.661C762.488 150.273 759.364 146.872 756.12 143.553L759.767 142.797C763.036 146.142 766.183 149.568 769.121 152.983L765.404 153.661ZM-194.21 141.967L-197.843 141.198C-194.504 137.849 -190.95 134.491 -187.28 131.216L-183.727 132.061C-187.37 135.31 -190.896 138.643 -194.21 141.967ZM745.838 133.648C742.26 130.398 738.469 127.141 734.57 123.968L738.049 123.061C741.979 126.258 745.797 129.54 749.403 132.816L745.838 133.648ZM-172.267 122.39L-175.732 121.471C-171.744 118.281 -167.538 115.089 -163.231 111.983L-159.862 112.973C-164.136 116.056 -168.31 119.224 -172.267 122.39L-172.267 122.39ZM722.35 114.532C718.126 111.435 713.702 108.349 709.203 105.361L712.486 104.311C717.021 107.323 721.48 110.432 725.735 113.553L722.35 114.532ZM-146.534 103.831L-149.802 102.77C-145.193 99.7595 -140.375 96.7589 -135.477 93.8514L-132.318 94.9797C-137.178 97.8656 -141.962 100.843 -146.534 103.831ZM695.156 96.473C690.338 93.5668 685.321 90.6777 680.24 87.8861L683.304 86.7034C688.423 89.5166 693.479 92.4272 698.334 95.3555L695.156 96.473ZM-117.243 86.4391L-120.286 85.2451C-115.114 82.4473 -109.723 79.6624 -104.264 76.968L-101.342 78.224C-106.759 80.8982 -112.109 83.6624 -117.243 86.4391ZM664.49 79.6189C659.12 76.9266 653.549 74.2582 647.934 71.6888L650.753 70.3824C656.41 72.9722 662.023 75.6603 667.434 78.3728L664.49 79.6189ZM-84.6504 70.3536L-87.4458 69.0374C-81.729 66.4616 -75.8132 63.915 -69.8641 61.4687L-67.2016 62.8425C-73.1057 65.27 -78.9767 67.7972 -84.6505 70.3537L-84.6504 70.3536ZM630.613 64.1119C624.728 61.6535 618.651 59.2287 612.552 56.9051L615.102 55.4864C621.245 57.8276 627.369 60.2707 633.299 62.7481L630.613 64.1119ZM-49.0324 55.7049L-51.5565 54.2772C-45.3732 51.9581 -38.983 49.6709 -32.5625 47.479L-30.1809 48.958C-36.5536 51.1337 -42.896 53.4034 -49.0324 55.7049ZM593.796 50.0827C587.446 47.8805 580.912 45.7196 574.377 43.6603L576.633 42.1409C583.22 44.2155 589.802 46.3925 596.201 48.6118L593.796 50.0827ZM-10.6881 42.6161L-12.9194 41.0886C-6.30173 39.0378 0.511124 37.0298 7.33083 35.1189L9.40787 36.6922C2.64082 38.5883 -4.12025 40.5815 -10.6881 42.6161ZM554.336 37.6528C547.58 35.7271 540.642 33.8498 533.716 32.0724L535.66 30.464C542.641 32.2549 549.632 34.147 556.441 36.0867L554.336 37.6528ZM30.0661 31.199L28.147 29.5834C35.1483 27.819 42.3271 26.1072 49.4836 24.4947L51.2405 26.149C44.1388 27.7488 37.0146 29.4476 30.0661 31.199V31.199ZM512.555 26.933C505.442 25.3007 498.154 23.7238 490.896 22.2462L492.513 20.5623C499.827 22.0511 507.171 23.6402 514.339 25.285L512.555 26.933ZM72.8875 21.5526L71.2985 19.8632C78.615 18.4027 86.0994 17.002 93.5428 15.6997L94.962 17.4214C87.5751 18.7133 80.1485 20.1033 72.8875 21.5526ZM468.785 18.0224C461.383 16.7004 453.807 15.439 446.266 14.2738L447.538 12.5279C455.136 13.7025 462.771 14.9733 470.23 16.3061L468.785 18.0224ZM117.482 13.7537L116.236 12.0042C123.834 10.857 131.586 9.77676 139.275 8.79455L140.344 10.5684C132.713 11.5435 125.021 12.6151 117.482 13.7537ZM423.449 11.0161C415.824 10.015 408.047 9.08266 400.334 8.2452L401.252 6.45338C409.025 7.29714 416.861 8.23664 424.546 9.24494L423.449 11.0161ZM163.502 7.87163L162.611 6.07668C170.4 5.2572 178.335 4.51052 186.193 3.85781L186.903 5.6694C179.104 6.31766 171.231 7.05848 163.502 7.87166V7.87163ZM376.966 5.96879C369.181 5.29581 361.251 4.69708 353.396 4.18911L353.95 2.36583C361.866 2.87784 369.858 3.4811 377.704 4.15899L376.966 5.96879ZM210.501 3.96525L209.972 2.14018C217.886 1.65378 225.935 1.24471 233.894 0.925541L234.241 2.75961C226.343 3.07702 218.357 3.48249 210.501 3.96528L210.501 3.96525ZM329.672 2.90885C321.797 2.56721 313.782 2.30379 305.846 2.12712L306.042 0.287697C314.035 0.466162 322.111 0.731444 330.047 1.07576L329.672 2.90885ZM258.08 2.0534L257.912 0.213982C265.26 0.0728307 272.748 0.000911425 280.172 0L281.982 0.00136263L281.97 1.84263L280.172 1.84126C272.805 1.84218 265.371 1.91362 258.08 2.05343L258.08 2.0534Z" fill="#E6E6E6"/>
    <path id="Vector_12" d="M664.353 152.626H639.428V155.387H664.353V152.626Z" fill="#F2F2F2"/>
    <path id="Vector_13" d="M664.353 146.181H639.428V148.943H664.353V146.181Z" fill="#F2F2F2"/>
    <g id="undraw_Reading_book_re_kqpk (1) 1" clip-path="url(#clip1)">
    <path id="Vector_14" d="M428.214 389.992V341.321C428.215 340.639 428.47 339.985 428.924 339.503C429.378 339.021 429.993 338.75 430.635 338.749H436.132C436.774 338.75 437.389 339.021 437.843 339.503C438.297 339.985 438.552 340.639 438.553 341.321V389.992C438.552 390.674 438.297 391.328 437.843 391.81C437.389 392.292 436.774 392.563 436.132 392.564H430.635C429.993 392.563 429.378 392.292 428.924 391.81C428.47 391.328 428.215 390.674 428.214 389.992Z" fill="#2F2E41"/>
    <path id="Vector_15" d="M417.342 389.992V341.321C417.342 340.639 417.598 339.985 418.051 339.503C418.505 339.021 419.121 338.75 419.762 338.749H425.26C425.901 338.75 426.517 339.021 426.971 339.503C427.424 339.985 427.68 340.639 427.68 341.321V389.992C427.68 390.674 427.424 391.328 426.971 391.81C426.517 392.292 425.901 392.563 425.26 392.564H419.762C419.121 392.563 418.505 392.292 418.051 391.81C417.598 391.328 417.342 390.674 417.342 389.992Z" fill="#2F2E41"/>
    <path id="Vector_16" d="M439.076 325.252H416.819C415.585 325.252 414.584 326.315 414.584 327.626V354.335C414.584 355.646 415.585 356.709 416.819 356.709H439.076C440.31 356.709 441.31 355.646 441.31 354.335V327.626C441.31 326.315 440.31 325.252 439.076 325.252Z" fill="#2F2E41"/>
    <path id="Vector_17" d="M390.53 248.784C390.53 248.784 379.298 254.328 369.793 258.004C363.894 243.859 355.397 244.388 355.397 244.388L350.245 248.157L351.174 253.809L350.921 263.05L349.569 267.895L351.508 268.267L352.604 268.478L352.769 268.319C352.496 269.47 352.385 270.657 352.441 271.842L401.171 263.768C401.171 263.768 399.482 255.424 390.53 248.784Z" fill="#E6E6E6"/>
    <path id="Vector_18" d="M376.14 321.538L379.408 326.234C380.141 327.288 381.54 327.511 382.533 326.732L419.378 297.804C420.37 297.025 420.58 295.539 419.847 294.484L416.58 289.788C415.846 288.733 414.447 288.51 413.454 289.29L376.609 318.218C375.617 318.997 375.407 320.483 376.14 321.538Z" fill="#3E7CB1"/>
    <path id="Vector_19" d="M438.923 288.193L434.067 290.93C432.977 291.545 432.562 292.982 433.141 294.14L454.617 337.132C455.196 338.29 456.549 338.731 457.639 338.116L462.495 335.379C463.585 334.764 463.999 333.327 463.421 332.169L441.944 289.177C441.366 288.019 440.013 287.578 438.923 288.193Z" fill="#3E7CB1"/>
    <path id="Vector_20" d="M452.535 307.273L444.605 312.858C443.393 313.541 441.942 313.156 441.363 311.998L432.605 294.466C432.026 293.308 432.54 291.815 433.752 291.132L439.149 288.089C440.361 287.406 441.813 287.791 442.391 288.949L453.682 303.939C454.26 305.097 453.747 306.59 452.535 307.273Z" fill="#CCCCCC"/>
    <path id="Vector_21" d="M398.494 302.137L403.648 309.409C404.054 309.868 404.615 310.137 405.207 310.157C405.799 310.177 406.375 309.946 406.807 309.515L420.43 295.932C420.862 295.501 421.115 294.905 421.134 294.276C421.152 293.647 420.935 293.035 420.53 292.576L416.767 288.318C416.362 287.859 415.801 287.59 415.209 287.57C414.617 287.55 414.041 287.781 413.609 288.212L398.594 298.782C398.162 299.213 397.909 299.808 397.89 300.438C397.871 301.067 398.088 301.678 398.494 302.137Z" fill="#CCCCCC"/>
    <path id="Vector_22" d="M440.436 287.493H415.459C414.225 287.493 413.224 288.556 413.224 289.867V346.238C413.224 347.549 414.225 348.612 415.459 348.612H440.436C441.67 348.612 442.67 347.549 442.67 346.238V289.867C442.67 288.556 441.67 287.493 440.436 287.493Z" fill="#CCCCCC"/>
    <path id="Vector_23" d="M427.801 283.814C438.81 283.814 447.734 274.334 447.734 262.639C447.734 250.944 438.81 241.464 427.801 241.464C416.793 241.464 407.869 250.944 407.869 262.639C407.869 274.334 416.793 283.814 427.801 283.814Z" fill="#3E7CB1"/>
    <path id="Vector_24" d="M430.125 269.709C428.893 269.672 427.36 269.627 426.181 268.711C425.829 268.427 425.54 268.065 425.335 267.65C425.129 267.235 425.011 266.777 424.989 266.308C424.968 265.975 425.019 265.641 425.139 265.333C425.26 265.025 425.445 264.75 425.682 264.531C426.298 263.977 427.199 263.847 428.169 264.15L427.164 256.346L427.902 256.238L429.083 265.414L428.467 265.113C427.753 264.765 426.772 264.588 426.163 265.135C426.013 265.278 425.897 265.456 425.822 265.654C425.748 265.853 425.717 266.067 425.734 266.28C425.752 266.629 425.84 266.97 425.993 267.279C426.146 267.588 426.36 267.858 426.62 268.072C427.538 268.784 428.76 268.877 430.146 268.918L430.125 269.709Z" fill="#2F2E41"/>
    <path id="Vector_25" d="M423.514 257.019H419.502V257.81H423.514V257.019Z" fill="#2F2E41"/>
    <path id="Vector_26" d="M436.177 257.019H432.165V257.81H436.177V257.019Z" fill="#2F2E41"/>
    <path id="Vector_27" d="M414.633 246.091C411.403 245.7 408.901 242.412 408.626 239.075C408.299 235.106 410.475 231.336 413.46 229.109C416.582 226.779 420.472 225.807 424.235 225.593C431.576 225.205 438.791 227.731 444.476 232.68C447.296 235.168 449.93 238.338 450.928 242.166C451.795 245.49 451.089 249.257 448.572 251.585C447.95 252.156 447.223 252.583 446.437 252.84C445.651 253.097 444.823 253.179 444.006 253.079C442.053 252.863 440.251 251.772 438.691 250.568C435.657 248.224 433.166 244.959 429.47 243.734C426.759 242.836 423.242 243.627 421.585 246.231C421.209 246.827 420.966 247.506 420.873 248.216C420.839 248.368 420.86 248.528 420.932 248.663C421.005 248.799 421.123 248.9 421.263 248.947C421.406 248.987 421.558 248.967 421.687 248.889C421.816 248.812 421.91 248.683 421.95 248.532C422.385 245.252 426.181 244.028 428.845 244.777C432.729 245.869 435.337 249.551 438.523 251.891C440.199 253.121 442.104 254.104 444.159 254.281C445.931 254.428 447.689 253.854 449.077 252.676C451.799 250.392 452.84 246.464 452.238 242.928C451.541 238.833 448.946 235.323 446.099 232.605C440.328 227.155 432.836 224.214 425.115 224.37C421.177 224.466 417.068 225.33 413.675 227.541C410.384 229.686 407.841 233.274 407.508 237.445C407.216 241.116 409.07 244.956 412.253 246.565C413.003 246.942 413.808 247.183 414.633 247.278C415.347 247.365 415.341 246.177 414.633 246.091H414.633Z" fill="#3E7CB1"/>
    <path id="Vector_28" d="M352.568 267.76L354.932 266.953C355.186 266.437 354.722 266.768 354.943 266.266C360.926 252.707 355.397 244.388 355.397 244.388L351.119 247.517C351.109 247.491 351.1 247.465 351.09 247.439C351.09 247.439 350.33 245.644 349.147 246.99C349.147 246.99 352.863 256.59 348.725 268.523L353.539 270.856L355.397 268.523L355.439 268.298L352.114 267.977L352.568 267.76Z" fill="#CCCCCC"/>
    <path id="Vector_29" d="M420.005 318.138C401.002 313.652 383.309 322.938 383.309 322.938L383.261 322.892L376.215 316.209L348.683 268.478L355.397 268.523C374.061 256.68 400.327 258.295 400.327 258.295C411.644 271.932 420.005 318.138 420.005 318.138Z" fill="#3F3D56"/>
    <path id="Vector_30" opacity="0.1" d="M383.261 322.892L376.215 316.209L348.683 268.478L355.397 268.523C355.397 268.523 382.157 306.069 383.261 322.892Z" fill="black"/>
    <path id="Vector_31" d="M386.353 285.65C392.106 283.775 395.86 279.107 394.739 275.222C393.617 271.338 388.044 269.708 382.292 271.583C376.54 273.457 372.785 278.126 373.907 282.01C375.029 285.895 380.601 287.524 386.353 285.65Z" fill="#3E7CB1"/>
    <path id="Vector_32" d="M471.653 392.318H385.247V393.11H471.653V392.318Z" fill="#3F3D56"/>
    </g>
    </g>
    <defs>
    <clipPath id="clip0">
    <rect width="806" height="678" fill="white"/>
    </clipPath>
    <clipPath id="clip1">
    <rect width="239.093" height="236.602" fill="white" transform="translate(305.558 156.507)"/>
    </clipPath>
    </defs>
    </svg>

  )
}

export default Register;
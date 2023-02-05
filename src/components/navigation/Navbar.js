import {connect} from 'react-redux'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {NavLink, Link} from 'react-router-dom'
import comensar_cs from 'assets/img/loadingB.gif'
import logo_lg from 'assets/img/logoNav.gif'
import {useState, Fragment } from 'react'

const solutions = [
    {
      name: 'Inicio',      
      href: '/',
      icon: IconOne,
    },
    {
      name: 'Servicios',      
      href: '/servicios',
      icon: IconTwo,
    },
    {
      name: 'Nosotros',      
      href: '/nosotros',
      icon: IconThree,
    },
    {
      name: 'Planes',      
      href: '/planes',
      icon: IconFour,
    },
    {
      name: 'Blog',      
      href: '/blog',
      icon: IconFive,
    },
    {
      name: 'Contacto',      
      href: '/contacto',
      icon: IconSix,
    },
    
  ]

function Navbar(){

    const [loading,setloading]=useState(true)

    window.onscroll = function() {scrollFunction()}

    function scrollFunction() {
        if(document.getElementById('navbar')){
            if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
                document.getElementById('navbar').classList.add('shadow-navbar');
                document.getElementById('navbar').classList.add('bg-black');

            }else{
                document.getElementById('navbar').classList.remove('shadow-navbar');
                document.getElementById('navbar').classList.remove('bg-black');

            }
        }

    }

    const [open, setOpen] = useState(false)

    return(
      <nav id='navbar' className='w-full py-2 top-0 z-40 fixed '>
      <div className='px-4 '>
        <div className='-mt-4 hidden lg:flex items-center justify-between px-2'>
            <Link to='/' className='ml-6 mt-4 '>
            <img src={logo_lg} width={350} className=''/>
            </Link>
            <div className='flex mt-4 flex-shrink-0'>
                <NavLink to='/' className='text-sm inline-flex font-normal leading-6 text-zinc-200 border-b border-transparent hover:border-zinc-200 hover:text-violeta  mx-6'>Inicio</NavLink>
                <NavLink to='/servicios' className='text-sm inline-flex font-normal leading-6 text-zinc-200 border-b border-transparent hover:border-zinc-200 hover:text-violeta  mx-6'>Servicios</NavLink>
                <NavLink to='/nosotros' className='text-sm inline-flex font-normal leading-6 text-zinc-200 border-b border-transparent hover:border-zinc-200 hover:text-violeta  mx-6'>Nosotros</NavLink>
                <NavLink to='/planes' className='text-sm inline-flex font-normal leading-6 text-zinc-200 border-b border-transparent hover:border-zinc-200 hover:text-violeta  mx-6'>Planes</NavLink>
                <NavLink to='/blog' className='text-sm inline-flex font-normal leading-6 text-zinc-200 border-b border-transparent hover:border-zinc-200 hover:text-violeta  mx-6'>Blog</NavLink>
                <NavLink to='/contacto' className='text-sm inline-flex font-normal leading-6 text-zinc-200 border-b border-transparent hover:border-zinc-200 hover:text-violeta  mx-6'>Contacto</NavLink>

                <Link to='/planes' className="inline-flex ml-8 relative items-center rounded border border-transparent mr-6 bg-zinc-300 px-2 py-0.5 text-xs font-medium text-black shadow-sm transition duration-300 ease-in-out hover:bg-transparent hover:text-violeta hover:border-2 hover:border-violeta focus:outline-none focus:ring-2 focus:ring-zinc-300 focus:ring-offset-1"
                > Comencemos <img src={comensar_cs} className='ml-1 w-4 '/></Link>
            </div>
        </div>
        <div className='-mt-4 lg:hidden md:flex sm:flex items-right justify-between px-2  inline-flex '>
            <Link to='/' className=' mt-4'>
            <img src={logo_lg} width={300} className='-ml-2'/>
            </Link>
            <div className='mt-3  '>
            <Link to='/planes' className="">
            </Link>

            <Popover className="relative">
            {({ open }) => (
            <>
            <Popover.Button
            className={`
                ${open ? '' : 'text-opacity-90'}
                group mt-0 mb-4 -mr-3 inline-flex items-center text-base font-medium text-zinc-50`}
            >
            {
                open ?
                <i className='bx bx-x text-xl text-zinc-600 hover:text-purple-200-accent'></i>
                :
                <i className='bx bx-menu text-4xl text-zinc-500 hover:text-purple-200-accent'></i>
            }
            
            </Popover.Button>
            <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
            >
            <Popover.Panel className="absolute -left-5 -mx-1 -z-10 -m-10 w-50 max-w-sm -translate-x-1/2 sm:px-0">
            <div className="shadow-lg -mr-4">
            <div className="h-screen w-40 -mt-2 grid bg-black border-l-2 border-zinc-900 p-6 pt-12">
                {solutions.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="-m-2 grid w-24 h-20 mr-1 items-center bg-pizarra hover:bg-zinc-900 rounded-lg p-2
                  transition duration-150 ">                                         
                  <div className='ml-6 '>
                    <item.icon aria-hidden="true" />
                    <h2 className="text-center -ml-6 mt-2 font-normal text-[smpx] text-zinc-500">
                  {item.name}</h2></div>                       
                </Link>
                ))}
            </div>
            
            </div>
            </Popover.Panel>
            </Transition>
            </>
            )}
        </Popover>

        </div>
        </div>
        </div>
      </nav>
    )
}

const mapStateToProps=state=>({

})

export default connect(mapStateToProps, {

}) (Navbar)

function IconOne() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" viewBox="0 0 450 400">
        
        <path  d="M3.135,229.361L223.932,9.985,446.894,229.361" stroke="#d500f9" strokeWidth="10"/>
        <path  d="M16.759,276.711L224.838,67.693,432.917,275.451" stroke="#d500f9" strokeWidth="1" fill="#d500f9"/>
        <path  d="M224.072,131.984L84.006,272.141V393.01h89.951V279.856H278.043V393.01h89.951V276Z" stroke="#d500f9" strokeWidth="10"/>

      </svg>
    )
  }

  function IconTwo() {
    return (
      <svg id="centro" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 2000 2000">

<circle stroke="#d500f9" strokeWidth="30" cx="1000.485" cy="1000.485" r="384.235"/>
  <circle stroke="#d500f9" strokeWidth="1" fill="#d500f9" cx="1000.485" cy="1002.705" r="215.235"/>
  <path stroke="#d500f9" strokeWidth="30" d="M986,353h28V1650H986V353Z"/>
  <path stroke="#d500f9" strokeWidth="30" d="M1000.49,47.485A151.342,151.342,0,1,1,849.149,198.827,151.343,151.343,0,0,1,1000.49,47.485Z"/>
  <path stroke="#d500f9" strokeWidth="30" d="M1000.49,1952.52a151.345,151.345,0,1,0-151.341-151.35A151.346,151.346,0,0,0,1000.49,1952.52Z"/>
  <path stroke="#d500f9" strokeWidth="30" d="M1647.5,985.5v28H350.5v-28h1297Z"/>
  <circle stroke="#d500f9" strokeWidth="30" cx="1801.67" cy="999.998" r="151.33"/>
  <path stroke="#d500f9" strokeWidth="30" d="M47.985,999.991A151.342,151.342,0,1,0,199.327,848.649,151.343,151.343,0,0,0,47.985,999.991Z"/>
  <path stroke="#d500f9" strokeWidth="30" d="M1447.75,532.249l19.79,19.8L550.427,1469.17l-19.8-19.8Z"/>
  <path stroke="#d500f9" strokeWidth="30" d="M1674.02,326.464a151.342,151.342,0,1,1-214.03,0A151.328,151.328,0,0,1,1674.02,326.464Z"/>
  <path stroke="#d500f9" strokeWidth="30" d="M326.964,1673.52a151.342,151.342,0,1,0,0-214.03A151.329,151.329,0,0,0,326.964,1673.52Z"/>
  <path stroke="#d500f9" strokeWidth="30" d="M1468.25,1447.25l-19.8,19.79L531.335,549.927l19.8-19.8Z"/>
  <path stroke="#d500f9" strokeWidth="30" d="M1674.04,1673.52a151.342,151.342,0,1,1,0-214.03A151.329,151.329,0,0,1,1674.04,1673.52Z"/>
  <path stroke="#d500f9" strokeWidth="30" d="M326.977,326.464a151.341,151.341,0,1,0,214.029,0A151.343,151.343,0,0,0,326.977,326.464Z"/>       
        
      </svg>
    )
  }

  function IconThree() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 400 400">
        
        <path stroke="#d500f9" strokeWidth="10" d="M17.258,121.751c24.768-82.8,112.97-129.556,197-104.42S346.34,129.97,321.572,212.775,208.6,342.331,124.569,317.2-7.51,204.557,17.258,121.751Z"/>
        <path stroke="#d500f9" strokeWidth="5" fill="#d500f9" d="M295.067,325.036l31.7-31.59L401,367.936l-31.7,31.589Z"/>
        <path stroke="#d500f9" strokeWidth="1" fill="#d500f9" d="M273.825,286.477l14.407-14.359,36.614,36.738-14.408,14.359Z"/>
        <path stroke="#d500f9" strokeWidth="1" fill="#d500f9" d="M97.984,128.788a19.806,19.806,0,0,0,14.765,6.172q14.843,0,20.157-17.657,5.625-16.875,13.75-25.546t25.312-8.672q14.685,0,23.984,8.594a27.617,27.617,0,0,1,9.3,21.094,23.981,23.981,0,0,1-3.047,11.875,44.757,44.757,0,0,1-7.5,9.922q-4.452,4.454-14.453,13.2a247.189,247.189,0,0,0-18.125,17.266,57.664,57.664,0,0,0-10.781,16.875q-4.065,9.609-4.062,22.734,0,10.47,5.546,15.781a19,19,0,0,0,13.672,5.313q15.622,0,18.594-16.25,1.718-7.655,2.578-10.7a32.791,32.791,0,0,1,2.422-6.094,34.5,34.5,0,0,1,4.766-6.719,108.438,108.438,0,0,1,8.515-8.515q19.22-17.187,26.641-24.454a71.26,71.26,0,0,0,12.812-17.265q5.391-10,5.391-23.281a55.773,55.773,0,0,0-9.453-31.25q-9.456-14.374-26.8-22.734t-40-8.359q-24.375,0-42.656,10T101.5,85.35q-9.532,15.234-9.531,30.078Q91.968,122.618,97.984,128.788Zm86.484,151.64q7.032-6.248,7.031-17.187a22.945,22.945,0,0,0-23.281-23.281,23.226,23.226,0,0,0-16.875,6.718,22.241,22.241,0,0,0-6.875,16.563q0,11.1,7.109,17.265a24.59,24.59,0,0,0,16.641,6.172A23.734,23.734,0,0,0,184.468,280.428Z"/>
      </svg>
    )
  }
  
  function IconFour() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 400 400">
        
        <path stroke="#d500f9" strokeWidth="9" d="M20,110.01H148a10,10,0,0,1,10,10V379.99a10,10,0,0,1-10,10H20a10,10,0,0,1-10-10V120.01A10,10,0,0,1,20,110.01Z"/>
        <path stroke="#d500f9" strokeWidth="9" d="M252,110.01H380a10,10,0,0,1,10,10V379.99a10,10,0,0,1-10,10H252a10,10,0,0,1-10-10V120.01A10,10,0,0,1,252,110.01Z"/>
        <path stroke="#d500f9" strokeWidth="9" d="M137,10.149H265a10,10,0,0,1,10,10V279.663a10,10,0,0,1-10,10H137a10,10,0,0,1-10-10V20.149A10,10,0,0,1,137,10.149Z"/>
        <path stroke="#d500f9" strokeWidth="1"  fill="#d500f9" d="M228.032,57.7a54.147,54.147,0,0,0-14.277-5.2V43.035H197.438v8.381q-14.581.672-24.128,9.68a28.729,28.729,0,0,0-9.547,21.665,30.061,30.061,0,0,0,3.6,14.373,36.933,36.933,0,0,0,10.892,12.152q7.29,5.406,27.947,14.625,10.155,4.525,13.713,8.884a16.155,16.155,0,0,1-1.953,22.084,18.338,18.338,0,0,1-12.975,5.071q-14.841,0-30.724-16.344l-16.491,16.344a82.151,82.151,0,0,0,20.31,15.588,53.144,53.144,0,0,0,19.354,5.532v21.874h16.317V180.568q12.061-2.431,18.486-7.124a35.052,35.052,0,0,0,10.5-12.739,38.182,38.182,0,0,0,4.079-17.517,36.592,36.592,0,0,0-14.754-30.171q-7.118-5.448-26.385-13.158-10.85-4.274-14.407-8.046-3.645-3.687-3.645-7.459,0-4.441,4.122-7.836t10.719-3.394q11.2,0,22.652,11.4l16.751-15.756Q233.889,60.971,228.032,57.7Z"/>
        <path stroke="#d500f9" strokeWidth="1"  fill="#d500f9" d="M102.163,284.152a30.175,30.175,0,0,0-7.954-2.892v-5.272H85.117v4.665a20.256,20.256,0,0,0-13.444,5.389,15.987,15.987,0,0,0-5.32,12.06,16.723,16.723,0,0,0,2.007,8,20.575,20.575,0,0,0,6.069,6.765q4.062,3.009,15.572,8.141,5.658,2.518,7.641,4.945a8.987,8.987,0,0,1-1.088,12.293,10.223,10.223,0,0,1-7.23,2.823q-8.269,0-17.119-9.1l-9.188,9.1a45.788,45.788,0,0,0,11.316,8.677,29.637,29.637,0,0,0,10.784,3.079V365h9.091V352.546q6.721-1.353,10.3-3.965a19.527,19.527,0,0,0,5.851-7.092,21.232,21.232,0,0,0,2.273-9.75,20.363,20.363,0,0,0-8.221-16.795q-3.966-3.033-14.7-7.325-6.046-2.379-8.028-4.479a5.974,5.974,0,0,1-2.031-4.152,5.547,5.547,0,0,1,2.3-4.362,9.093,9.093,0,0,1,5.972-1.889q6.238,0,12.621,6.344l9.334-8.77A39.136,39.136,0,0,0,102.163,284.152Z"/>
        <path stroke="#d500f9" strokeWidth="1"  fill="#d500f9" d="M329.523,284.152a30.179,30.179,0,0,0-7.955-2.892v-5.272h-9.091v4.665a20.256,20.256,0,0,0-13.444,5.389,15.986,15.986,0,0,0-5.32,12.06,16.726,16.726,0,0,0,2.007,8,20.583,20.583,0,0,0,6.069,6.765q4.062,3.009,15.572,8.141,5.658,2.518,7.641,4.945a8.987,8.987,0,0,1-1.089,12.293,10.221,10.221,0,0,1-7.229,2.823q-8.27,0-17.119-9.1l-9.188,9.1a45.794,45.794,0,0,0,11.316,8.677,29.632,29.632,0,0,0,10.784,3.079V365h9.091V352.546q6.721-1.353,10.3-3.965a19.519,19.519,0,0,0,5.852-7.092,21.232,21.232,0,0,0,2.273-9.75,20.363,20.363,0,0,0-8.221-16.795q-3.966-3.033-14.7-7.325-6.047-2.379-8.028-4.479a5.974,5.974,0,0,1-2.031-4.152,5.549,5.549,0,0,1,2.3-4.362,9.093,9.093,0,0,1,5.972-1.889q6.238,0,12.622,6.344l9.333-8.77A39.134,39.134,0,0,0,329.523,284.152Z"/>
        <path stroke="#d500f9" strokeWidth="9" d="M15,142H124v33H15V142Z"/>
        <path stroke="#d500f9" strokeWidth="9" d="M15,209H124v33H15V209Z"/>
        <path stroke="#d500f9" strokeWidth="9" d="M276,142H385v33H276V142Z"/>
        <path stroke="#d500f9" strokeWidth="9" d="M276,209H385v33H276V209Z"/>
        <path stroke="#d500f9" strokeWidth="9" d="M157,229h88v23H157V229Z"/>
      </svg>
    )
  }

  function IconFive() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 400 400">
        
        <path stroke="#d500f9" strokeWidth="10" d="M10.147,10.2H389.853V354.119l-131.985-.163v32.793L134.01,353.956l-123.863.163V10.2h0Z"/>
        <circle stroke="#d500f9" strokeWidth="10" cx="73.5" cy="64.531" r="19"/>
        <circle stroke="#d500f9" strokeWidth="10" cx="73.5" cy="144.484" r="19"/>
        <circle stroke="#d500f9" strokeWidth="10" cx="73.5" cy="222.938" r="19"/>
        <circle stroke="#d500f9" strokeWidth="10" cx="73.5" cy="303.485" r="19"/>
        <path stroke="#d500f9" strokeWidth="10" d="M121,62H346v5H121V62Z"/>
        <path stroke="#d500f9" strokeWidth="10" d="M121,141H346v5H121v-5Z"/>
        <path stroke="#d500f9" strokeWidth="10" d="M121,222H346v5H121v-5Z"/>
        <path stroke="#d500f9" strokeWidth="10" d="M121,303H346v5H121v-5Z"/>
        
      </svg>
    )
  }

  function IconSix() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 400 400">
        
        <path stroke="#d500f9" strokeWidth="10" d="M16.164,142.131S196.049,12,202.066,12c5.328,0,181.77,130.131,181.77,130.131a10.328,10.328,0,0,1,10.328,10.328V379.672A10.328,10.328,0,0,1,383.836,390H16.164A10.328,10.328,0,0,1,5.836,379.672V152.459A10.328,10.328,0,0,1,16.164,142.131Z"/>
        <path stroke="#d500f9" strokeWidth="10" d="M10,150L136,268,14.271,382"/>
        <path stroke="#d500f9" strokeWidth="10" d="M390.917,150.963L270,271.881,394.156,396.037"/>
        <path stroke="#d500f9" strokeWidth="10" d="M130,269H272v3H130v-3Z"/>
        <path stroke="#d500f9" strokeWidth="10" d="M74,207.843V10.392H325V212"/>
        <path stroke="#d500f9" strokeWidth="2" fill="#d500f9" d="M227.065,215.133a57.559,57.559,0,0,1-22.547,4.468,75.424,75.424,0,0,1-36.638-8.9,63.841,63.841,0,0,1-25.473-24.862,70.579,70.579,0,0,1-9.106-35.61,70.689,70.689,0,0,1,9-35.231A63.269,63.269,0,0,1,166.9,90.243q15.611-8.739,35.229-8.74,18.643,0,33.061,7.713A54.343,54.343,0,0,1,257.307,110.4q7.7,13.47,7.7,31.067a57,57,0,0,1-4.064,21.781q-4.065,9.939-10.515,15.208t-10.243,5.267a3.82,3.82,0,0,1-2.656-1.033,3,3,0,0,1-1.138-2.229q0-.869,1.084-7.609L248.2,109.47H226.929l-2.28,11.375a31.3,31.3,0,0,0-11.485-10.672,32.4,32.4,0,0,0-15.277-3.522q-20.8,0-33.372,15.809a56.148,56.148,0,0,0-12.569,35.91q0,18.253,10.243,29.228a33.6,33.6,0,0,0,25.636,10.974q13.658,0,23.2-10.515,0.216,5.855,3.143,8.238,3.793,3.362,10.081,3.361,8.346,0,20.7-6.3A64.318,64.318,0,0,0,270.477,170.4q9.375-14.709,9.377-35.122,0-27.793-22.384-48.749t-54.9-20.954a85.824,85.824,0,0,0-42.979,11.063A80.608,80.608,0,0,0,128.7,107.654a85.99,85.99,0,0,0-11.328,43.169,83.545,83.545,0,0,0,11.273,42.519A82.536,82.536,0,0,0,159.75,224.2a85.267,85.267,0,0,0,43.034,11.334,84.19,84.19,0,0,0,25.256-3.794,72.749,72.749,0,0,0,21.3-10.46q9.159-6.666,20.975-21.3h-20.7Q237.686,210.664,227.065,215.133ZM183.6,170.363q-4.988-5.337-4.987-14.161a25.694,25.694,0,0,1,6.612-17.809q6.612-7.353,15.5-7.352a16.566,16.566,0,0,1,12.628,5.392q5.041,5.391,5.041,13.887a27.565,27.565,0,0,1-6.179,17.592q-6.178,7.789-15.609,7.788A16.972,16.972,0,0,1,183.6,170.363Z"/>
              
      </svg>
    )
  }
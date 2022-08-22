import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarDataManager = [
    {
        title:'Dashboard',
        path:'/',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Match',
        path:'/manager/MatchDetail',
        icon:<FaIcons.FaCartPlus />,
        cName:'nav-text'
    },
    {
        title:'Achivement',
        path:'/manager/Achivement',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Ranking',
        path:'/manager/CricketRanking',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Player',
        path:'/manager/Players',
        icon:<AiIcons.AiFillHome />,
        // BsPerson
        cName:'nav-text'
    },
    {
        title:'Payments',
        path:'/manager/Membership',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Events',
        path:'/manager/Session',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Logout',
        path:'/',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
]


export const SidebarDataPlayer = [
    {
        title:'Performance',
        path:'/player/playerRanking',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Sessions',
        path:'/player/Psession',
        icon:<IoIcons.IoIosPaper />,
        cName:'nav-text'
    },
    {
        title:'Matches',
        path:'/player/Matches',
        // MdSportsCricket
        icon:<FaIcons.FaCartPlus />,
        cName:'nav-text'
    },
    {
        title:'Events',
        path:'/player/PEvents',
        // MdEventAvailable
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Ranking',
        path:'/player/PlayerRankingList',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Attendance',
        path:'/player/Progress',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Payments',
        path:'/player/Payments',
        // FaMoneyBillAlt
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Achivements',
        path:'/manager/Session',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Logout',
        path:'/',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },

    
]

export const SidebarDataAdmin = [
    {
        title:'Dashboard',
        path:'/profile',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Employees',
        path:'/admin/Employees',
        icon:<IoIcons.IoIosPaper />,
        cName:'nav-text'
    },
    {
        title:'Accounts',
        path:'/admin/Accounts',
        icon:<FaIcons.FaCartPlus />,
        cName:'nav-text'
    },
    {
        title:'Payments',
        path:'/admin/AnnualMembership',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Feedbacks',
        path:'/admin/Feedback',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Achivements',
        path:'/Admin/Achivements',
        // GiTrophyCup
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Ranking',
        path:'/admin/Raking',
        icon:<AiIcons.AiFillHome />,
        // GiAchievement
        cName:'nav-text'
    },
    {
        title:'Logout',
        path:'/',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
        
]




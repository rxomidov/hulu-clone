const HeaderItem = ({title, Icon}) => {
    return (
        <div className="group flex flex-col items-center w-12 sm:w-20 cursor-pointer transition duration-200 hover:text-white">
            <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
            <p className="tracking-widest opacity-0 group-hover:opacity-100">{title}</p>
        </div>
    )
}
export default HeaderItem;

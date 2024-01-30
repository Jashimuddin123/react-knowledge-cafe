import profile from '../../images/profile.png'


const Header = () => {
    return (
        <header className='flex justify-between p-4 border-b-2 max-w-7xl items-center mx-auto'>
             <h1 className='text-4xl font-bold text-black '>Knowledege Cafe</h1>
             <img src={profile}></img>
           
        </header>
    );
};

export default Header;
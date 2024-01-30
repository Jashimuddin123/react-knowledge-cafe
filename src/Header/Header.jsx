import profile from '../../images/profile.png'


const Header = () => {
    return (
        <header className='flex justify-between mx-4 p-4 border-b-2'>
             <h1 className='text-4xl font-bold text-black '>Knowledege Cafe</h1>
             <img src={profile}></img>
           
        </header>
    );
};

export default Header;
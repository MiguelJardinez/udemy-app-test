import {useEffect} from 'react';
import MainLayout from '../Layout/MainLayout';
import {ConditionsGlobalId, ConnectGlobalId, HeaderTitle, ShopInfo, SaveChanges} from '../components';
import {useDispatch, useSelector} from 'react-redux';
import {getUSerInfoAction} from '../redux/actions/user/userActions';

const Index = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state: any) => state.user);

  useEffect(() => {
    console.log('Vamos a obtener los datos del usuario desde el api');
    dispatch(getUSerInfoAction());
  }, []);

  return (
    <>
      <MainLayout>
        <HeaderTitle title="Settings" subtitle="Reduce risk and eliminate fraud with free customer ID verification" />
        <div>
          <div className="w-6/12">
            <ConnectGlobalId />
          </div>
          <div className="border-gray-200 border" />
          <div className="w-6/12">
            <ShopInfo />
          </div>
          <div className="border-gray-200 border" />
          <div className="w-7/12">
            <ConditionsGlobalId />
          </div>
        </div>
      </MainLayout>
      {userState?.isChanged && <SaveChanges />}
    </>
  );
}
export default Index;

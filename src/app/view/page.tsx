import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { fetchUserToken } from '@/service/token';
import { getTopTrack } from '@/service/top-track';
import { ErrorType } from '@/types/enum';
import { IUserDataResponse } from '@/types/interface';
import Viewer from '../components/Viewer/Viewer';
import Error from '../components/Error/Error';

export default async function Page() {
  const session = await getServerSession();

  if (!session) {
    redirect('/');
  }

  const usertoken = await fetchUserToken();
  const userdata = (await getTopTrack(
    usertoken.accessToken
  )) as IUserDataResponse;

  if (userdata.error) {
    return <Error type={ErrorType.error} />;
  }

  if (userdata.items.length === 0 || userdata === undefined) {
    return <Error type={ErrorType.empty} />;
  }

  return <Viewer userData={userdata.items} />;
}

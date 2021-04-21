interface DummyData {
  id: number;
  name: string;
  verified: string;
  birthday: string;
  purchaseId: string;
  issueDate?: string;
  purchaseDate?: string;
  expirationDate?:string;
}

interface DummyTable {
  name: string;
  purchase: string;
  verification: string;
  status: string;
}

interface ITDummyDataApi {
  uuid: string,
  global_client_id: string,
  shop_name: string,
  photo_url: string,
  limit_ammount: Number,
  settings: ITDummySettings
}

interface ITDummySettings {
  address: boolean,
  ammount: boolean,
}
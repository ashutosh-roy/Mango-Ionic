import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  // Storing the key value pair 
  async store(storagekey: string, value:any)
  {
    //btoa is a 64 based encoder in JS that encrypts values.
    const encryptedvalue = btoa(escape(JSON.stringify(value)));
    await Storage.set({
        key:storagekey,
        value:encryptedvalue
    });
  }
  // Get the value
async get(storageKey: string) {
  const ret = await Storage.get({ key: storageKey });
  return JSON.parse(unescape(atob(ret.value)));
  }
  
  async removeStorageItem(storageKey: string) {
  await Storage.remove({ key: storageKey });
  }
  
  // Clear storage
  async clear() {
  await Storage.clear();
  }
}
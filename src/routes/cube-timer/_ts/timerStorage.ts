import type { CubeTimerRecords, CubeTimerSolve, CubeTimerStorage } from './types';

export function getCubeTimerStorage(): CubeTimerStorage {
  const storage = localStorage.getItem(getStorageKey());
  if (storage) {
    try {
      const parsedStorage = JSON.parse(storage);
      return checkCubeTimerStorage(parsedStorage);
    } catch (e) {
      /* empty */
    }
  }

  return getEmptyCubeTimerStorage();
}

export function saveCubeTimerStorage(storage: CubeTimerStorage) {
  localStorage.setItem(getStorageKey(), JSON.stringify(storage));
}

function checkCubeTimerStorage(parsedStorage: unknown): CubeTimerStorage {
  if (!isObject(parsedStorage)) {
    return getEmptyCubeTimerStorage();
  }

  const storageObject = parsedStorage as object;

  if (!Object.hasOwn(storageObject, 'records') || !Object.hasOwn(storageObject, 'solves')) {
    return getEmptyCubeTimerStorage();
  }

  const validatesStorage = parsedStorage as {
    records: unknown;
    solves: unknown;
  };

  return {
    records: checkCubeTimerStorageRecords(validatesStorage.records),
    solves: checkCubeTimerStorageSolves(validatesStorage.solves),
  };
}

function checkCubeTimerStorageRecords(records: unknown): CubeTimerRecords {
  if (!isObject(records)) {
    return {};
  }

  const recordsObject = records as object;
  const allowedProperties = ['single', 'ao5', 'ao12'];

  return Object.entries(recordsObject)
    .filter(([key, value]) => allowedProperties.includes(key) && Number.isInteger(value))
    .reduce((obj, [key, value]) => {
      // @ts-ignore
      obj[key] = value;
      return obj;
    }, {});
}

function checkCubeTimerStorageSolves(solves: unknown): CubeTimerSolve[] {
  if (!Array.isArray(solves)) {
    return [];
  }

  const allowedProperties = ['timeStamp', 'single', 'ao5', 'ao12'];

  return solves.filter((solve) => {
    if (!isObject(solve)) {
      return false;
    }

    let solveObject = solve as object;

    solveObject = Object.entries(solveObject)
      .filter(([key, value]) => allowedProperties.includes(key) && Number.isInteger(value))
      .reduce((obj, [key, value]) => {
        // @ts-ignore
        obj[key] = value;
        return obj;
      }, {});

    return Object.hasOwn(solveObject, 'timeStamp') && Object.hasOwn(solveObject, 'single');
  });
}

function isObject(object: unknown): boolean {
  return typeof object === 'object' && object !== null && !Array.isArray(object);
}

function getEmptyCubeTimerStorage(): CubeTimerStorage {
  return {
    records: {},
    solves: [],
  };
}

function getStorageKey(): string {
  return 'cubeTimer';
}

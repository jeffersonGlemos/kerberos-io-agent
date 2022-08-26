import {
  doGetConfig,
  doSaveConfig,
  doVerifyHub,
  doVerifyPersistence,
  doGetKerberosAgentTags,
} from '../api/agent';

export const addRegion = (id, polygon) => {
  return (dispatch) => {
    dispatch({
      type: 'ADD_REGION',
      id,
      polygon,
    });
  };
};

export const removeRegion = (id, polygon) => {
  return (dispatch) => {
    dispatch({
      type: 'REMOVE_REGION',
      id,
      polygon,
    });
  };
};

export const updateRegion = (id, polygon) => {
  return (dispatch) => {
    dispatch({
      type: 'UPDATE_REGION',
      id,
      polygon,
    });
  };
};

export const verifyPersistence = (config, onSuccess, onError) => {
  return (dispatch) => {
    doVerifyPersistence(
      config,
      () => {
        dispatch({
          type: 'VERIFY_PERSISTENCE',
        });
        if (onSuccess) {
          onSuccess();
        }
      },
      (error) => {
        const { data } = error.response.data;
        if (onError) {
          onError(data);
        }
      }
    );
  };
};

export const verifyHub = (config, onSuccess, onError) => {
  return (dispatch) => {
    doVerifyHub(
      config,
      () => {
        dispatch({
          type: 'VERIFY_HUB',
        });
        if (onSuccess) {
          onSuccess();
        }
      },
      (error) => {
        const { data } = error.response.data;
        if (onError) {
          onError(data);
        }
      }
    );
  };
};

export const getKerberosAgentTags = (onSuccess, onError) => {
  return (dispatch) => {
    doGetKerberosAgentTags(
      (data) => {
        dispatch({
          type: 'GET_MACHINERY_TAGS',
          tags: data.data,
        });
        if (onSuccess) {
          onSuccess();
        }
      },
      () => {
        if (onError) {
          onError();
        }
      }
    );
  };
};

export const getConfig = (onSuccess, onError) => {
  return (dispatch) => {
    doGetConfig(
      (config) => {
        dispatch({
          type: 'GET_CONFIG',
          config,
        });
        if (onSuccess) {
          onSuccess(config);
        }
      },
      () => {
        if (onError) {
          onError();
        }
      }
    );
  };
};

export const updateConfig = (field, value) => {
  return (dispatch) => {
    dispatch({
      type: 'UPDATE_CONFIG',
      field,
      value,
    });
  };
};

export const saveConfig = (service, config, onSuccess, onError) => {
  return (dispatch) => {
    doSaveConfig(
      service,
      config,
      () => {
        dispatch({
          type: 'SAVE_CONTAINER',
        });
        if (onSuccess) {
          onSuccess();
        }
      },
      () => {
        if (onError) {
          onError();
        }
      }
    );
  };
};

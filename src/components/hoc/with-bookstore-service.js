import React from 'react';
import { ConsumerBookstoreService } from '../context-bookstore-service';

const withBookstoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <ConsumerBookstoreService>
        {
          (bookstoreService) => {
            return (
              <Wrapped 
                {...props}
                bookstoreService={bookstoreService}
              />
            )
          }
        }
      </ConsumerBookstoreService>
    );
  }
}

export default withBookstoreService;
import React from 'react';
import { connect } from 'react-redux';
import InfoBlock from '@sidebar/InfoBlock';
import { closeBlogUser } from '../actions/common';

const UserDetails = ({ user, closeBlogUser }) => {
  return user ? (
    <InfoBlock
      title={user.name}
      data={{
        email: user.email,
        username: user.username,
        phone: user.phone,
        website: user.website,
        company: user.company.name,
        city: user.address.city,
        zipcode: user.address.zipcode,
      }}
      showControlBtns={true}
      onClose={closeBlogUser}
    />
  ) : null;
};

const mapStateToProps = (state) => ({ user: state.blogUser });

export default connect(mapStateToProps, { closeBlogUser })(UserDetails);

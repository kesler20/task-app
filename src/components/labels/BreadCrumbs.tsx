import * as React from "react";

interface IBreadCrumbsProps {}

const BreadCrumbs: React.FunctionComponent<IBreadCrumbsProps> = (props) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol>
        <li className="breadcrumb-item">
          <a href="https://github.com/business">Business</a>
        </li>
        <li className="breadcrumb-item">
          <a href="https://github.com/business/customers">Customers</a>
        </li>
        <li className="breadcrumb-item breadcrumb-item-selected">
          <a
            href="https://github.com/business/customers/mailchimp"
            aria-current="page"
          >
            MailChimp
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumbs;

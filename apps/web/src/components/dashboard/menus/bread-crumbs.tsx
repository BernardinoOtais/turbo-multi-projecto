"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb-modificada";
import { capitalizeFirstLetter } from "@/lib/my-utils";

const BreadCrumb = () => {
  const paths = usePathname();

  const pathNames = paths
    .split("/")
    .filter(path => path !== "" && path !== "dashboard");

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/dashboard">Dashboard</Link>
          </BreadcrumbLink>
          {pathNames.length > 0 && <BreadcrumbSeparator />}
        </BreadcrumbItem>

        {pathNames.map((name, index) => {
          const href = `/dashboard/${pathNames.slice(0, index + 1).join("/")}`;
          const linkName = name[0].toLowerCase() + name.slice(1, name.length);
          const isLast = pathNames.length === index + 1;

          return (
            <Fragment key={index}>
              <BreadcrumbItem>
                {!isLast ? (
                  <>
                    <BreadcrumbLink asChild>
                      <Link href={href}>{capitalizeFirstLetter(linkName)}</Link>
                    </BreadcrumbLink>
                    <BreadcrumbSeparator />
                  </>
                ) : (
                  <BreadcrumbPage>
                    {capitalizeFirstLetter(linkName)}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
export default BreadCrumb;

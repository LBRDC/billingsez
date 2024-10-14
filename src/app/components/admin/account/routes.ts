import { Route } from "@angular/router";
import { AccountListComponent } from "./account.list/account.list.component";
import { authGuard } from "../../../shared/authguards/auth.guard";

export const ACCOUNT_ROUTES: Route[] = [
  { path: 'accounts', component: AccountListComponent, canActivate: [authGuard] }
]

// Code generated by wunderctl. DO NOT EDIT.

import type {} from "./models";
import { createContext } from "react";
import {
	QueryArgsWithInput,
	SubscriptionArgs,
	SubscriptionArgsWithInput,
	hooks,
	WunderGraphContextProperties,
	Client,
} from "@wundergraph/sdk/dist/nextjs";

export type Role = "superadmin" | "admin" | "user";

export enum AuthProvider {
	"authing" = "authing",
}

export const AuthProviders = {
	authing: AuthProvider.authing,
};

export enum S3Provider {}

const defaultWunderGraphContextProperties: WunderGraphContextProperties<Role> = {
	ssrCache: {},
	client: new Client({
		applicationHash: "a12a46af",
		applicationPath: "app/main",
		baseURL: "http://localhost:9991",
		sdkVersion: "1.0.0-next.32",
	}),
	user: null,
	setUser: (value) => {},
	isWindowFocused: "pristine",
	setIsWindowFocused: (value) => {},
	refetchMountedOperations: 0,
	setRefetchMountedOperations: (value) => {},
};

export const WunderGraphContext = createContext<WunderGraphContextProperties<Role>>(
	defaultWunderGraphContextProperties
);

export const withWunderGraph = hooks.withWunderGraphContextWrapper(
	WunderGraphContext,
	defaultWunderGraphContextProperties
);

export const useWunderGraph = hooks.useWunderGraph<Role, AuthProvider, S3Provider>(WunderGraphContext);

export const useQuery = {};

export const useMutation = {};

export const useSubscription = {};

export const useLiveQuery = {};

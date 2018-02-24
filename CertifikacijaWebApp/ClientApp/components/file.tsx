import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface FetchCatalogDataState {
    forecasts: WeatherForecast[];
    loading: boolean; 
}

export class FetchCatalogData extends React.Component<RouteComponentProps<{}>, FetchCatalogDataState> {
    constructor() {
        super();
        this.state = { forecasts: [], loading: true };

        fetch('api/SampleData/WeatherForecasts')
            .then(response => response.json() as Promise<WeatherForecast[]>)
            .then(data => {
                this.setState({ forecasts: data, loading: false });
            });
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Učitavanje...</em></p>
            : FetchCatalogData.renderCatalogTable(this.state.forecasts);

        return <div>
            <h1>Catalog</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>;
    }

    private static renderCatalogTable(forecasts: WeatherForecast[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Author / Director</th>
                    <th>Dewey Call Number</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.dateFormatted}>
                        <td>{forecast.dateFormatted}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}
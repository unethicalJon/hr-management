package com.nova.hrmanager.webconfig;

import com.nova.hrmanager.entity.Employee;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class WebConfig implements RepositoryRestConfigurer {

private String allowedOrigins = "http://localhost:3000";

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        HttpMethod[] unsupportedActions = {
                HttpMethod.DELETE,
                HttpMethod.PATCH,
                HttpMethod.PUT};

        config.exposeIdsFor(Employee.class);

        disableHttpMethods(Employee.class, config, unsupportedActions);

        cors.addMapping(config.getBasePath() + "/**")
                .allowedOrigins(allowedOrigins);
        }

        private void disableHttpMethods(Class theClass, RepositoryRestConfiguration config, HttpMethod[] unsupportedActions) {
        config.getExposureConfiguration()
                .forDomainType(theClass)
                .withItemExposure((metdata, httpMethods) ->
                        httpMethods.disable(unsupportedActions))
                        .withCollectionExposure((metdata, httpMethods) ->
                                httpMethods.disable(unsupportedActions));
        }
    }

